<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Services\Product\ShowProductService;
use App\Models\Product;
use Illuminate\Validation\ValidationException;

class ShowProductController extends Controller
{
    protected $service;

    public function __construct(ShowProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(Product $product)
    {
        try {
            return $this->service->handle($product);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
