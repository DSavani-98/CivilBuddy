# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Install dependencies for Flask and React
RUN apt-get update && \
    apt-get install -y pandoc nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy everything from the root directory (including app and frontend)
COPY . /app

# Install Python dependencies
WORKDIR /app/app
RUN pip install --no-cache-dir -r requirements.txt

# Build the React frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Set the working directory back to the Flask app
WORKDIR /app/app

# Expose port 5000 for the Flask app
EXPOSE 5000

# Define environment variable for Flask
ENV FLASK_ENV=development

# Run the Flask app
CMD ["python", "app.py"]