#!/usr/bin/env node

// Custom build script for Vercel compatibility
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== VERCEL CUSTOM BUILD PROCESS ===');
console.log('Node version:', process.version);
console.log('Working directory:', process.cwd());

function runCommand(command, description) {
  console.log(`\n=== ${description} ===`);
  console.log(`Running: ${command}`);
  
  try {
    execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, PATH: process.env.PATH + ':./node_modules/.bin' }
    });
    console.log(`✅ ${description} completed successfully`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

// Check node_modules
if (!fs.existsSync('node_modules')) {
  console.log('⚠️  node_modules not found, installing dependencies...');
  if (!runCommand('npm install', 'Dependency Installation')) {
    process.exit(1);
  }
}

// List available packages for debugging
console.log('\n=== CHECKING INSTALLED PACKAGES ===');
try {
  const vitePath = path.join('node_modules', '.bin', 'vite');
  const esbuildPath = path.join('node_modules', '.bin', 'esbuild');
  console.log('Vite available:', fs.existsSync(vitePath));
  console.log('ESBuild available:', fs.existsSync(esbuildPath));
} catch (e) {
  console.log('Error checking packages:', e.message);
}

// Try multiple approaches for vite
let buildSuccess = false;

// Approach 1: Direct npx
if (!buildSuccess) {
  console.log('\n=== ATTEMPTING BUILD METHOD 1: npx vite ===');
  buildSuccess = runCommand('npx vite build', 'Frontend Build (npx)');
}

// Approach 2: Node modules bin direct
if (!buildSuccess) {
  console.log('\n=== ATTEMPTING BUILD METHOD 2: direct path ===');
  buildSuccess = runCommand('./node_modules/.bin/vite build', 'Frontend Build (direct path)');
}

// Approach 3: Node execution
if (!buildSuccess) {
  console.log('\n=== ATTEMPTING BUILD METHOD 3: node execution ===');
  try {
    const viteBin = require.resolve('vite/bin/vite.js');
    buildSuccess = runCommand(`node ${viteBin} build`, 'Frontend Build (node execution)');
  } catch (e) {
    console.log('Could not resolve vite binary path:', e.message);
  }
}

if (!buildSuccess) {
  console.error('❌ All frontend build methods failed');
  process.exit(1);
}

// Build backend
console.log('\n=== BUILDING BACKEND ===');
if (!runCommand('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', 'Backend Build')) {
  // Try direct path
  if (!runCommand('./node_modules/.bin/esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', 'Backend Build (direct path)')) {
    console.error('❌ Backend build failed');
    process.exit(1);
  }
}

console.log('\n🎉 BUILD COMPLETED SUCCESSFULLY!');