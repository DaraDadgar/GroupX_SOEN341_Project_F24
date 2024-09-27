# Stage 1: Build the React app using a Node.js environment
FROM node:18 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app using Vite
RUN npm run build

# Stage 2: Serve the app using an Nginx web server
FROM nginx:alpine

# Copy the built app from the 'build' stage to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow external traffic
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
