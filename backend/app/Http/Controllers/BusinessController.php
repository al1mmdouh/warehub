<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\User;
use Validator;

class BusinessController extends Controller
{
    public function store()
    {

        $validator = Validator::make(request()->all(),[
            'user_id' => 'required|exists:users,id',
            'business_name' => 'required|min:3|max:255',
            'business_address' => 'required',
            'business_type' => 'required|in:product,warehouse',
        ]);
        
        if ($validator->fails()) {
            return $this->respondValidationErrors($validator->errors());
        }

        $business = Business::create($validator->validated());

        return response()->json($business, 201); 
    }
}