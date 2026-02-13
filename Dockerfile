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

# Expose port
EXPOSE 5000

# Set environment to production
ENV NODE_ENV=production

# Create startup script that runs migrations then starts the app
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'echo "Running database migrations..."' >> /app/start.sh && \
    echo 'npm run db:push || echo "Migration failed, continuing..."' >> /app/start.sh && \
    echo 'echo "Starting application..."' >> /app/start.sh && \
    echo 'node dist/index.cjs' >> /app/start.sh && \
    chmod +x /app/start.sh

# Start the application with migrations
CMD ["/app/start.sh"]
