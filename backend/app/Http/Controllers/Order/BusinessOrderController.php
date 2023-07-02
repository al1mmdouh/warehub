<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Services\Order\BusinessOrderService;
use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class BusinessOrderController extends Controller
{
   
    protected $service;

    public function __construct(BusinessOrderService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(Business $business)
    {
        try {
            return $this->service->handle($business);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
