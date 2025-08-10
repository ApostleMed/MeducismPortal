# Meducism Platform

A comprehensive academic website for the Meducism philosophy - a moral framework treating healthcare knowledge, ethical conduct, and self-care as universal human duties.

## Features

- **Interactive Core Values**: Detailed exploration of Meducism's four pillars
- **Community Forums**: Discussion platform for global Meducist community
- **Resource Library**: Academic papers, guides, and educational materials
- **Events Management**: Conferences, workshops, and community meetups
- **Blog System**: Latest news and insights from Meducism practitioners
- **User Authentication**: Secure login with Replit Auth integration

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Shadcn/UI
- **Backend**: Node.js, Express.js, PostgreSQL with Drizzle ORM
- **Authentication**: Replit Auth (OpenID Connect)
- **Deployment**: Vercel with automatic GitHub integration

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Replit account for authentication

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/meducism-platform.git
cd meducism-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Configure your DATABASE_URL and other required variables
```

4. Run database migrations
```bash
npm run db:push
```

5. Start the development server
```bash
npm run dev
```

## Deployment

This application is configured for automatic deployment to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Automatic deployments trigger on every push to main branch

## Environment Variables

Required environment variables for production:

- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret for session management
- `REPL_ID` - Replit application ID for authentication
- `REPLIT_DOMAINS` - Comma-separated list of allowed domains

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## About Meducism

Meducism is a moral philosophy that equips individuals with healthcare professional skills, ethics, and mindset. Learn more about our mission and values at [www.meducism.org](https://www.meducism.org).