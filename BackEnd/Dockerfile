# Use the official Python image from Docker Hub
FROM python:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Expose port for Flask
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app.py

# Copy the initialization script and make it executable
COPY init_db.sh /app/init_db.sh
RUN chmod +x /app/init_db.sh

# Start Flask application
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]