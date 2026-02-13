# =====================================
# Next.js Production Dockerfile
# =====================================

# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies (force clean online install)
RUN npm config set registry https://registry.npmjs.org/ \
 && npm install --legacy-peer-deps --no-audit --no-fund --prefer-online

# Copy source
COPY . .

# Build Next.js
RUN npm run build


# ---------- Production Stage ----------
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app ./

EXPOSE 3000

# Start Next.js in production
CMD ["npm", "start"]

