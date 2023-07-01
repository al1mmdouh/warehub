<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Services\Order\DeleteOrderService;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DeleteOrderController extends Controller
{
    protected $service;

    public function __construct(DeleteOrderService $service)
    {
        return $this->service = $service;
    }
    public function __invoke(Order $order)
    {
        try {
            return $this->service->handle($order);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
