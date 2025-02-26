# --------------------
# 1. Build stage
# --------------------
    FROM node:18 AS builder
    # FROM node:18-alpine AS builder
    
    
    WORKDIR /app
    
    # Copy package.json and package-lock.json
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install --force
    
    # Copy the rest of your files
    COPY . .
    
    # Build the Next.js app for production
    RUN npm run build
    
    # --------------------
    # 2. Production stage
    # --------------------
    FROM node:18 AS runner
    
    ENV NODE_ENV=production
    
    WORKDIR /app
    
    # Copy only needed files/folders from the builder stage
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    
    # Uncomment & verify the path if you do have next.config.js
    # COPY --from=builder /app/next.config.js ./
    
    EXPOSE 3000
    
    CMD ["npm", "start"]