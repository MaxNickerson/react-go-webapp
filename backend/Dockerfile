FROM golang:1.22.5-alpine

# Ensure the base image is updated
RUN apk update && apk upgrade

# Create and set the working directory
RUN mkdir /app
ADD . /app/
WORKDIR /app

# Download Go module dependencies
RUN go mod download

# Run tests
RUN go test ./...

# Build the Go application
RUN go build -o main .

# Expose the application port
EXPOSE 8080

# Run the Go application
CMD ["/app/main"]
