# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the source code to the working directory
COPY . .

# Serve the built app using a lightweight HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3001"]

# Expose the port the app will run on
EXPOSE 3001

