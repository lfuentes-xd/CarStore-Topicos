<?php

use Illuminate\Http\Request;
use App\Http\Controllers\CarsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\AuthenticationController;

use App\Http\Controllers\SaleController;
use  App\Http\Controllers\BuyerController;



//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login_user', [AuthenticationController::class, 'login_user']);

route::get('/wel', function () {
    return view('welcome');
});

Route::middleware('auth:api')->get('/user_index', [AuthenticationController::class, 'user_index']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/Car_index', [CarsController::class, 'index']);

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthenticationController::class, 'logout']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/Car_indexadm', [CarsController::class, 'indexadm']);



    Route::get('/Car_brands', [CarsController::class, 'create']);

    Route::get('/ventas_index', [SaleController::class, 'index']);

    Route::post('/insert', [CarsController::class, 'store']);
    Route::get('/Car_token', [CarsController::class, 'token']);
    Route::post('/car/{id}/delete', [CarsController::class, 'destroy']);
    Route::post('/Updatecar/{id}', [CarsController::class, 'update']);
    Route::post('/disable/{id}', [CarsController::class, 'disable']);


    Route::get('/Brands_index', [BrandsController::class, 'index']);
    Route::post('/insertBrand', [BrandsController::class, 'store']);
    Route::post('/Brands/{id}/delete', [BrandsController::class, 'destroy']);
    Route::post('/createV', [SaleController::class, 'create']);
    Route::post('/infoC', [BuyerController::class, 'create']);


    //Route::post('/products', [ProductController::class]);

});

// Route::get('/Car_index', [AutoController::class, 'index']);
