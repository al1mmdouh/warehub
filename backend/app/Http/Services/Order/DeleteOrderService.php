<?php

namespace App\Http\Services\Order;


use App\Models\Order;

class DeleteOrderService{
   public function handle(Order $order)
   {
         $order->delete();
         return response()->json(['message'=>'success']);
   }
}