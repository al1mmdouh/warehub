<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Services\Order\UpdateOrderService;
use App\Models\Order;
use Illuminate\Http\Request;

class UpdateOrderController extends Controller
{
    protected $service;
    public function __construct(UpdateOrderService $service)
    {
        return $this->service = $service ;
    }

    public function __invoke(UpdateOrderRequest $request , Order $order)
    {
        return $this->service->handle($request , $order);
    }
}
