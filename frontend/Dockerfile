# Use the official Node.js image as the base
FROM node:14 as build

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the source code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Use Nginx as the server for serving the built files
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["npm", "start"]
