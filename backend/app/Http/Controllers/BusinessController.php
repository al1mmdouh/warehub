<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\User;

class BusinessController extends Controller
{
    public function store()
    {

        $attributes = request()->validate([
            'business_name' => 'required|min:3|max:255',
            'business_address' => 'required',
            'business_type' => 'required|in:product,warehouse',
        ]);

        $business = Business::create($attributes);

        return response()->json($business, 201); //redirect to home page
    }
}