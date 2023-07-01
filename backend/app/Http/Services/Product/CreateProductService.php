<?php

namespace App\Http\Services\Product;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;

class CreateProductService
{
    public function handle(StoreProductRequest $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'sku' => $request->sku,
            'price' => $request->price,
            'weight' => $request->weight,
            'image' => $request->file('image'),
            'business_id' => $request->business_id,
        ]);

        return ProductResource::make($product);
    }
}
