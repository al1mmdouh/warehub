<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class BusinessController extends Controller
{
    public function store()
    {
        try {
            $attributes = request()->validate([
                'user_id' => 'required|exists:users,id',
                'business_name' => 'required|min:3|max:255',
                'business_address' => 'required',
                'business_type' => 'required|in:product,warehouse',
            ]);

            $business = Business::create($attributes);

            return response()->json($business, 201);

        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 400);
        }





    }
}