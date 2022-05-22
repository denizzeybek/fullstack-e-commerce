<?php
// use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/

// php artisan route:list komutu ile controllerın bütün api methodlarını görebilirsin
// Route::resource('products', ProductController::class); -> bütün api leri çalıştırır.

// public routes
Route::middleware(['cors'])->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::get('/products', [ProductController::class, 'index']); // product controller'ın index methodunda return ettiğini getir
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::get('/getCategoryList', [ProductController::class, 'getCategoryList']);
    Route::get('/products/search/{name}', [ProductController::class, 'search']);
    Route::get('/getUsers', [AuthController::class, 'index']);
    Route::get('/getSingleUser/{id}', [AuthController::class, 'getSingleUser']);
    Route::post('/updateUser/{id}', [AuthController::class, 'updateUser']);
    Route::post('/updateAdminStatus/{id}', [AuthController::class, 'updateAdminStatus']);
    Route::post('/addProduct', [ProductController::class, 'store']);

});



// protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Route::post('/products', [ProductController::class, 'store']);
    // Route::post('/addProduct', [ProductController::class, 'store']);
    Route::put('/updateProduct/{id}', [ProductController::class, 'update']);
    Route::delete('/deleteProduct/{id}', [ProductController::class, 'destroy']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



