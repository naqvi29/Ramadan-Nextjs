# --------------------
# 1. Build stage
# --------------------
    FROM node:18 AS builder

    WORKDIR /app
    
    # Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml, etc.)
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install --force
    
    # Copy the rest of your code (including server.js, pages, etc.)
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # --------------------
    # 2. Production stage
    # --------------------
    FROM node:18 AS runner
    
    WORKDIR /app
    ENV NODE_ENV=production
    
    # Copy required files/folders from the builder stage
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    
    # IMPORTANT: Copy over your custom server.js
    COPY --from=builder /app/server.js ./server.js
    
    # Expose the port that your server will run on
    EXPOSE 3000
    
    # Run your custom server file
    CMD ["node", "server.js"]
    