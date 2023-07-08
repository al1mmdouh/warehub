<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\BusinessResource;

class BusinessController extends Controller
{
    public function store()
    {
        try {
            $attributes = request()->validate([
                'user_id' => 'required|exists:users,id',
                'business_name' => 'required|unique:businesses,business_name|min:3|max:255',
                'business_address' => 'required',
                'business_type' => 'required|in:product,warehouse',
            ]);

            $business = Business::create($attributes);

            return response()->json($business, 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 400);
        }
    }
<<<<<<< HEAD
    public function show($id)
    {
        $business = Business::with('user')->get();
        $business  = $business->where('user_id', $id);
        return BusinessResource::collection($business);
      
    }
}
=======
}
>>>>>>> origin/backend-orders-management
