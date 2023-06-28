<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;


use App\Http\Services\Product\CreateProductService;

use Illuminate\Validation\ValidationException;


class CreateProductController extends Controller
{

    public function __construct(protected CreateProductService $service)
    {
    }

    public function __invoke(StoreProductRequest $request)
    {
        try {
            return $this->service->handle($request);
        } catch (ValidationException $e) {

            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
