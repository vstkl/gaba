# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY src ./src

# Build the TypeScript code
RUN npm run build

# Set the command to run the server
CMD ["node", "dist/server.js"]
