#!/bin/bash

# Wait for MySQL to fully start
while ! mysqladmin ping --silent; do
    echo "Waiting for MySQL to start..."
    sleep 1
done

# Initialize the database
mysql -u root -e "CREATE DATABASE IF NOT EXISTS db_name;"
mysql -u root -e "CREATE USER IF NOT EXISTS 'db_user'@'%' IDENTIFIED BY 'db_password';"
mysql -u root -e "GRANT ALL PRIVILEGES ON db_name.* TO 'db_user'@'%';"
mysql -u root -e "FLUSH PRIVILEGES;"
