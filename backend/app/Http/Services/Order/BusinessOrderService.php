<?php

namespace App\Http\Services\Order;

use App\Http\Resources\OrderResource;
use App\Models\Business;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class BusinessOrderService
{
    public function handle(Business $business)
    {
        $orders = Order::where('business_id',$business->id)->get();
        return  OrderResource::collection($orders);
    }
}
