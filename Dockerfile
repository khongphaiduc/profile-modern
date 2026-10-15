# Stage 1: Build the Vite application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definition files first for layer caching
COPY package.json package-lock.json ./

# Install dependencies cleanly
RUN npm ci

# Copy remaining project source code
COPY . .

# Build production bundle (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve application with lightweight Nginx
FROM nginx:alpine AS runner

# Remove default Nginx welcome assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for SPA routing & performance
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
