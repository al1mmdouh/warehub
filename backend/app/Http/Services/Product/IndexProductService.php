<?php

namespace App\Http\Services\product;

use App\Http\Resources\ProductResourse;
use App\Models\Product;

class IndexProductService
{

    public function handle()
    {
       return ProductResourse::collection(Product::all());
    }
}   
