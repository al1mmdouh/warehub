<?php

namespace App\Http\Services\product;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Intervention\Image\Facades\Image;

class CreateProductService
{
    public function handle(StoreProductRequest $request)
    {
        try{

            
            $image = $request->file('image');
            $name_gen =  hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            Image::make($image)->save('upload/product/' . $name_gen);
            $save_url = '/upload/product/' . $name_gen;

            $product = Product::create([
                'name'=>$request->name,
                'description'=>$request->description,
                'sku'=>$request->sku,
                'price'=>$request->price,
                'weight'=>$request->weight,
                'image'=>$save_url
            ]);  
            
            return response()->json(['message'=>'success','data'=>$product]);
        }
        catch(\Exception $e){
            return response()->json(['message'=>'error']);
         
        }   
    
        
    }
}
