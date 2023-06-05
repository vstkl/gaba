# Use the official Node.js image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the source code to the container
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the backend server
CMD ["npm", "start"]
