<?php

namespace App\Http\Services\Order;

use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Product;

class UpdateOrderService
{
    public function handle(UpdateOrderRequest $request, Order $order)
    {
        $order->update([
            'status' => $request->get('status'),
        ]);
        return OrderResource::make($order);
    }
}
