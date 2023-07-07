<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Services\Order\CreateOrderService;
use Illuminate\Validation\ValidationException;

class CreateOrderController extends Controller
{
    protected $service;

    public function __construct(CreateOrderService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(StoreOrderRequest $request)
    {
        try{
           return $this->service->handle($request);
            
        }catch(ValidationException $e){
            return response()->json(['message'=>$e->getMessage()]);
        }
       ;
    }
}
