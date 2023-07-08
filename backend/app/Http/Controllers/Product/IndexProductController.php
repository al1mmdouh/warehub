<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Services\Product\IndexProductService;
use Illuminate\Validation\ValidationException;

class IndexProductController extends Controller
{
    protected $service;

    public function __construct(IndexProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke()
    {
        try {
            return  $this->service->handle();
        } catch (ValidationException $e) {
            return response()->json(['massage' => $e->getMessage()]);
        }
    }
}
