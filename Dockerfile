# Step 1: Build Laravel Application
FROM composer:2.2.2 AS composer
WORKDIR /app
COPY . .
RUN composer install --optimize-autoloader --no-dev --no-interaction

# Step 2: Build React Application
FROM node:16.14.0 AS node
WORKDIR /app
COPY ./resources/js ./resources/js
COPY ./package.json ./yarn.lock ./
RUN yarn install --production --frozen-lockfile
RUN yarn run production

# Step 3: Build PHP-FPM Image
FROM php:8.1-fpm
LABEL maintainer="Your Name <your-email@example.com>"

# Install dependencies and enable necessary PHP extensions
RUN apt-get update && apt-get install -y \
    curl \
    libpq-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql gd mbstring exif pcntl bcmath

# Copy Laravel Application from Composer Build
COPY --from=composer /app /var/www/html

# Copy React Application from Node Build
COPY --from=node /app/public /var/www/html/public
COPY ./vite.config.js /var/www/html/
COPY ./resources/js /var/www/html/resources/js

# Set permissions and environment variables
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
ENV APP_ENV=production
ENV APP_DEBUG=false

# Expose port 9000
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]
