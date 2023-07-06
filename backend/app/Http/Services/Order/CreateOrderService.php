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
            'payment_token' => $request->payment_token,
            'shipping_data' => DB::table('last_mile_company')->first(),
            'tax' => $request->tax,
            'discount' => $request->discount,
            'distanation'=>$request->distanation,
            'business_id'=>$request->business_id
        ]);

        foreach ($request->get('products') as $product) {
            $productObj = Product::find($product['id']);
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
