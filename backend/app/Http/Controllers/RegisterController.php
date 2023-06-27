<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function store()
    {
        try {
            $attributes = request()->validate([
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:users,email',
                'password' => 'required|min:7|max:255',
                'phone_number' => 'required|max:255',
                'address' => 'required|max:255',
            ]);

            $user = User::create($attributes);

            return response()->json($user, 201);

        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 400);
        }
    }
}