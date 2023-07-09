<?php
namespace App\Http\Services\Product;

use App\Http\Resources\ProductResource;
use App\Models\Business;
use App\Models\Product;

class BusinessProductService{
    public function handle(Business $business)
    {

       $products = Product::where('business_id',$business->id)->get();
       
        return ProductResource::collection($products);
    }
}