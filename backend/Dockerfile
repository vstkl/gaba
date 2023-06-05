# Use the official Node.js image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./
COPY tsconfig.json ./


# Install dependencies
RUN npm ci --only=production

# Copy the source code to the container
COPY . .

RUN npm run build

# Expose port 3001

# Start the backend server
CMD ["npm", "start"]

EXPOSE 3000
