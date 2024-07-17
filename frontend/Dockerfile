# Stage 1: Build and test the react app
FROM node:14-alpine as builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set the CI environment variable to ensure tests exit after running
ENV CI=true

# Run tests
RUN npm test

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Ensure the base image is updated
RUN apk update && apk upgrade

# Copy the build files from the first stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
