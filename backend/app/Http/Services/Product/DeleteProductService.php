<?php

namespace App\Http\Services\Product;

use App\Models\Product;

class DeleteProductService
{
    public function handle(Product $product)
    {

        return $product->delete();
    }
}
