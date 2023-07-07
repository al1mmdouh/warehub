<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Services\Order\IndexOrderService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class IndexOrderController extends Controller
{
    protected $service;
    public function __construct(IndexOrderService $service)
    {
        return $this->service = $service;
    }

    public function __invoke()
    {
        try{
            return $this->service->handle();
        }catch(ValidationException $e){
            return response()->json(['message'=>$e->getMessage()]);
        }
    }
}
