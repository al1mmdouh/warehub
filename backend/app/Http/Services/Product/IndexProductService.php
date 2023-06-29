<?php

namespace App\Http\Services\product;

use App\Http\Resources\ProductResource;
use App\Models\Product;

class IndexProductService
{

    public function handle()
    {
       return ProductResource::collection(Product::all());
    }
}   
