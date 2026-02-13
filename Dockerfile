# =====================================
# Next.js TEST Dockerfile (dev + build)
# =====================================

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application (required by you)
RUN npm run build

# Expose Next.js dev port
EXPOSE 3000

# Run Next.js in dev mode
CMD ["npm", "start", "--", "-p", "3000", "-H", "0.0.0.0"]
