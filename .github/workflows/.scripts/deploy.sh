#!/bin/bash
set -e

echo "Deployment started ..."

cd andrevk9.beget.tech/public_html

git reset --hard HEAD  
git clean -df
git pull origin main

cd backend/user

(php artisan down) || true

composer install --prefer-dist --no-ansi --no-interaction --no-progress --no-scripts

php artisan clear-compiled

php artisan optimize

cp .env.example .env
cat .env

chmod -R 777 storage bootstrap/cache

php artisan key:generate

php artisan up

