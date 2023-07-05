<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Services\Product\UpdateProductService;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UpdateProductController extends Controller
{
    protected $service;
    public function __construct(UpdateProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(UpdateProductRequest $request , Product $product)
    {
        try{
            return $this->service->handle($request, $product);
        }
        catch (ValidationException $e) {
            return response()->json(['massage' => $e->getMessage()]);
        }
    }
}
