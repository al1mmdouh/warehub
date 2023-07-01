<?php

namespace App\Http\Services\Order;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;

class CreateOrderService
{
    public function handle(StoreOrderRequest $request)
    {

        $order = Order::create([
            'payment_token' => $request->payment_token,
            'shipping_data' => $request->shipping_data,
            'tax' => $request->tax,
            'discount' => $request->discount,
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
