# Base image: Node.js versi 18 (alpine = versi kecil)
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package files dulu (untuk caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy semua code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command untuk jalankan aplikasi
CMD ["npm", "start"]