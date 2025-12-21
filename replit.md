# The Green Pantry

## Overview

The Green Pantry is a premium cloud kitchen website selling healthy food including salads, wraps, and cold-pressed juices. The brand emphasizes wellness, freshness, and calm luxury with a minimal, clean design aesthetic. The site uses a soft olive/sage green color palette with off-white backgrounds and deep green accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints with Zod validation
- **Development**: Vite middleware for HMR in development
- **Production**: Static file serving from compiled dist folder

### Data Layer
- **Database**: PostgreSQL via Neon Serverless
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Migrations**: Drizzle Kit for database migrations (`db:push` command)

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend with API routes
- `shared/` - Shared types, schemas, and route definitions
- `netlify/functions/` - Serverless function endpoints for Netlify deployment

### Key Design Decisions
1. **Monorepo Structure**: Client and server share types through `shared/` directory
2. **Type-Safe API**: Route definitions in `shared/routes.ts` provide type safety across client/server boundary
3. **Static Menu Data**: Menu items are seeded to database and also available as static data in `client/src/data/menu.ts`
4. **Component Library**: Full Shadcn/ui component set pre-installed for rapid UI development

## External Dependencies

### Database
- **Neon Serverless PostgreSQL**: Cloud-hosted PostgreSQL with WebSocket support
- **Connection**: Requires `DATABASE_URL` environment variable

### Third-Party Services
- **Google Fonts**: Inter and Playfair Display fonts loaded via CDN
- **WhatsApp Integration**: Order buttons link to WhatsApp for ordering flow

### Key NPM Packages
- `@neondatabase/serverless` - PostgreSQL client
- `drizzle-orm` / `drizzle-kit` - Database ORM and migrations
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animation library
- `zod` - Runtime type validation
- Radix UI primitives - Accessible UI components