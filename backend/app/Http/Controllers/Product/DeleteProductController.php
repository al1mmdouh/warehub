<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Services\Product\DeleteProductService;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DeleteProductController extends Controller
{
    protected $service;
    public function __construct(DeleteProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(Product $product)
    {
        try {
            $this->service->handle($product);
            return response()->json(['message' => 'success']);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
