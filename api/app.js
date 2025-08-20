// Vercel serverless function wrapper
let appInitialized = false;

module.exports = async (req, res) => {
  if (!appInitialized) {
    // Set Vercel environment before importing
    process.env.VERCEL = '1';
    process.env.NODE_ENV = 'production';
    
    // Import and initialize the server
    await import('../dist/index.js');
    appInitialized = true;
  }
  
  // Get the initialized app from global
  const app = (global).__meducism_app;
  if (!app) {
    res.status(500).json({ error: 'App not initialized' });
    return;
  }
  
  // Handle the request with Express app
  return app(req, res);
};