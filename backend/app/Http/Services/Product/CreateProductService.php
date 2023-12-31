<?php

namespace App\Http\Services\Product;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Intervention\Image\Facades\Image;

class CreateProductService
{
    public function handle(StoreProductRequest $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'sku' => $request->sku,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'weight' => $request->weight,
            'image' => $request->file('image'),
            'business_id' => $request->business_id,
            'warehouse_id' => $request->warehouse_id
        ]);
        return ProductResource::make($product);
    }
}
