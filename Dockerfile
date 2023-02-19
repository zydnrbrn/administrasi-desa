# # building laravel
# FROM php:8.1-fpm

# RUN apt-get update -y && apt-get install -y libmcrypt-dev

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# WORKDIR /.

# RUN composer install

# # Base image
# FROM node:18-alpine

# WORKDIR /.

# # Install app dependencies
# COPY package*.json ./ /~/development/ujikom-project/adminstrasi-desa/
# RUN npm install

# # Run the app
# CMD ["npm", "run", "dev"]

## docker v2
# Use an official PHP runtime as a parent image
FROM php:8.1-fpm

# Install required packages
RUN apt-get update && \
    apt-get install -y \
        libonig-dev \
        libxml2-dev \
        libzip-dev \
        unzip \
        curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Enable required Apache modules
# RUN a2enmod rewrite headers

# Set working directory
WORKDIR /var/www/html

# Copy the composer.json and composer.lock files to the container
COPY composer.json composer.lock ./

# Install the PHP dependencies
RUN composer install --no-scripts --no-autoloader

# Copy the rest of the application code to the container
COPY . .

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y gnupg2 && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    npm install --global npm

# Install the Node.js dependencies
RUN npm install

# Generate the autoload files for the PHP classes
RUN composer dump-autoload

# Expose the port that the application will run on
EXPOSE 80

