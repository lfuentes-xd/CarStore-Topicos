<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AutoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']);

Route::middleware('auth:api')->group(function(){
    Route::post('/logout', [AuthenticationController::class, 'logout']);
    Route::post('/products', [ProductController::class, 'store']);

    //Route::post('/products', [ProductController::class]);

});

Route::get('/Car_index', [AutoController::class, 'index']);
Route::get('/Car_brands', [AutoController::class, 'create']);
Route::post('/insert', [AutoController::class, 'store']);
Route::get('/Car_token', [AutoController::class, 'token']);
