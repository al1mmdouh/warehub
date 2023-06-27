<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Services\product\IndexProductService;
use Illuminate\Http\Request;

class IndexProductController extends Controller
{
    protected $service;

    public function __construct(IndexProductService $service)
    {
        return $this->service = $service;
    }

    public function __invoke()
    {
        return  $this->service->handle();
    }
}
