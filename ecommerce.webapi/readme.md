
## Run Laravel
php artisan serve

## Port
localhost:8000

## Model ve migration yaratmak
php artisan make:model Product --migration 

## migration yarattıktan sonra db yi güncellemek için
php artisan migrate
php artisan migrate:fresh -> önceden table mevcutsa bu komutu kullan

## controller yaratmak yaratmak
php artisan make:controller ProductController --api
`--api` dediğin zaman crud methodlarıyla birlikte yaratır.

## #####################################
authentication için sanctum kullandık
` https://laravel.com/docs/9.x/sanctum#installation `
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate     




