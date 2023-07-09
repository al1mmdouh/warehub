<?php

namespace App\Http\Services\Product;

use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;


class UpdateProductService
{
    public function handle(UpdateProductRequest $request , Product $product)
    {
        if($request->file('image')){
            if($product->image){
                $product->clearMediaCollection('image');
            }
            $product->update(['image'=>$request->file('image')]);
        }
       
        $product->update([
            'name' => $request->name,
            'description' => $request->name,
            'sku' => $request->sku,
            'price' => $request ->price,
            'quantity'=> $request->quantity,
            'weight' => $request->weight,
            
        ]);
        return ProductResource::make($product->fresh());
    }
}
