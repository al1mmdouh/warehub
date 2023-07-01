<?php

namespace App\Http\Services\Product;

use App\Http\Resources\ProductResource;
use App\Models\Product;

class ShowProductService
{
    public function handle(Product $product)
    {
        return ProductResource::make($product);
    }
}
