<?php 

namespace App\Http\Services\Order;

use App\Http\Resources\OrderResource;
use App\Models\Order;

class ShowOrderService{
    public function handle(Order $order)
    {
       return OrderResource::make($order);
    }
}