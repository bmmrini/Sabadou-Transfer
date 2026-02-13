# Node.js base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

# Install PostgreSQL client for database readiness check
RUN apk add --no-cache postgresql-client

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including drizzle-kit for migrations)
RUN npm ci

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Copy drizzle config for migrations
COPY drizzle.config.ts ./

# Copy server folder for schema
COPY server ./server

# Copy shared folder for schema
COPY shared ./shared

# Copy startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Start the application with migrations
CMD ["/app/start.sh"]
