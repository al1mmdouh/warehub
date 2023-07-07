<?php

namespace App\Http\Services\Order;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CreateOrderService
{
    public function handle(StoreOrderRequest $request)
    {

        $order = Order::create([
            'shipping_data' => DB::table('last_mile_company')->first(),
            'tax' => $request->tax/100,
            'discount' => $request->discount/100,
            'distanation'=>$request->distanation,
            'business_id'=>$request->business_id
        ]);

        foreach ($request->get('products') as $product) {
            $productObj = Product::find($product['id']);
            // update product quantity after make order 
            $product_quantity = DB::table('products')->select('quantity')->where('id',$product['id'])->first();
            $value =  $product_quantity->quantity;
            DB::table('products')->where('id',$product['id'])->update(['quantity'=>($value-$product['quantity'])]);

            $order->products()->attach(
                $productObj->id,
                [
                    'quantity' => $product['quantity'],
                    'price' => $productObj->price,
                ]
            );
        }  
        return OrderResource::make($order);
    }

  
}
