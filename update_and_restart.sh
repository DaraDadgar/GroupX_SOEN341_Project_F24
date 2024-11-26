#!/bin/bash
# THIS IS ONLY FOR CLOUD (IGNORE IF RUNNING LOCALLY)
# Variables
REPO_DIR="/home/ubuntu/GroupX_SOEN341_Project_F24"
DOCKER_COMPOSE_FILE="docker-compose.yml"

# Step 1: Navigate to the project directory
cd "$REPO_DIR" || { echo "Directory $REPO_DIR not found. Exiting."; exit 1; }

# Step 2: Pull the latest code from the main branch
echo "Pulling the latest code from the main branch..."
git fetch origin main
git reset --hard origin/main

# Step 3: Stop and remove running containers
echo "Stopping and removing existing containers..."
docker-compose down

# Step 4: Rebuild and restart the containers
echo "Rebuilding and starting containers..."
docker-compose up --build -d

# Step 5: Verify running containers
echo "Containers currently running:"
docker ps

echo "Update and restart completed successfully!"
