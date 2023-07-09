<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Services\Product\BusinessProductService as ProductBusinessProductService;
use App\Models\Business;
use Illuminate\Http\Request;

class BusinessProductController extends Controller
{
    protected $service;

    public function __construct(ProductBusinessProductService $service)
    {
        $this->service = $service;
    }

    public function __invoke(Business $business)
    {
        return $this->service->handle($business);
    }
}