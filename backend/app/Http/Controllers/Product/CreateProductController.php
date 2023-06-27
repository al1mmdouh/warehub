<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Http\Request;

use App\Http\Services\product\CreateProductService;

class CreateProductController extends Controller
{
    protected $service;

    public function __construct(CreateProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke(StoreProductRequest $request)
    {

        return $this->service->handle($request);
    }
}
