<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\Order\BusinessOrderController;
use App\Http\Controllers\Order\CreateOrderController;
use App\Http\Controllers\Order\DeleteOrderController;
use App\Http\Controllers\Order\IndexOrderController;
use App\Http\Controllers\Order\ShowOrderController;
use App\Http\Controllers\Order\UpdateOrderController;
use App\Http\Controllers\Product\CreateProductController;
use App\Http\Controllers\Product\DeleteProductController;
use App\Http\Controllers\Product\IndexProductController;
use App\Http\Controllers\Product\ShowProductController;
use App\Http\Controllers\Product\UpdateProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PHPUnit\TextUI\XmlConfiguration\Group;

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

Route::prefix('products')->group(function () {
    Route::get('/', IndexProductController::class)->name('product.index');
    Route::post('/', CreateProductController::class)->name('product.store');
    Route::get('/{product}', ShowProductController::class)->name('product.show');
    Route::delete('/{product}', DeleteProductController::class)->name('product.destroy');
    Route::post('/{product}', UpdateProductController::class)->name('product.update');
});

Route::prefix('orders')->group(function () {
    Route::get('/', IndexOrderController::class)->name('order.index');
    Route::post('/', CreateOrderController::class)->name('order.store');
    Route::get('/{order}',ShowOrderController::class)->name('order.show');
    Route::post('/{order}',UpdateOrderController::class)->name('order.update');
    Route::delete('/{order}',DeleteOrderController::class)->name('order.destroy');

}); 

 Route::get('/{business}',BusinessOrderController::class)->name('business.show');

Route::post('register', [AuthController::class, 'register'])->middleware('guest');

Route::post('login', [AuthController::class, 'login'])->middleware('guest');

Route::post('logout', [AuthController::class, 'logout'])->middleware('auth');

Route::post('business', [BusinessController::class, 'store']); //->middleware('auth')
