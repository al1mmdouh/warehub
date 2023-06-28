<?php

namespace App\Http\Services\Product;

use App\Http\Resources\Product as ResourcesProduct;
use App\Http\Resources\ProductResourse;
use App\Models\Product;
use Illuminate\Validation\ValidationException;

class ShowProductService
{

    public function handle(Product $product)
    {
        return new  ProductResourse($product);
    }
}
