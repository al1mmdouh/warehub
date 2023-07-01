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
            $this->service->handle($request);
            return response()->json(['message'=>'success']);

        }catch(ValidationException $e){
            return response()->json(['message'=>$e->getMessage()]);
        }
       ;
    }
}
