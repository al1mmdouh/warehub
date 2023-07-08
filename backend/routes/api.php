<?php

use App\Http\Controllers\BusinessController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WarehouseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[AuthController::class, 'register'])->middleware('guest');

Route::post('login',[AuthController::class, 'login'])->middleware('guest');

Route::post('logout',[AuthController::class, 'logout'])->middleware('auth');

Route::post('business',[BusinessController::class,'store']);//->middleware('auth')

Route::get('business/{business}', [BusinessController::class, 'show'])->name('business.show');

Route::prefix('warehouse')->group(function () {
    Route::get('/users/{userId}', [WarehouseController::class, 'getUserWarehouses']);
    Route::get('/', [WarehouseController::class, 'index']);
    Route::post('/', [WarehouseController::class, 'store']);
    Route::get('/{id}', [WarehouseController::class, 'show']);
    Route::put('/{id}', [WarehouseController::class, 'update']);
    Route::delete('/{id}', [WarehouseController::class, 'destroy']);
});


