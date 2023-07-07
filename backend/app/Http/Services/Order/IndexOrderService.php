<?php

namespace App\Http\Services\Order;

use App\Http\Resources\OrderResource;
use App\Models\Order;

class IndexOrderService{
   public function handle()
   {
         return OrderResource::collection(Order::all());
   }
}