<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store() {

        $attributes = request()->validate([
            'name'=>'required|max:255',
            'email'=>'required|email|max:255|unique:users,email',
            'password'=>'required|min:7|max:255',
            'phone_number' => 'required|max:255',
            'address' => 'required|max:255',
        ]);

        $user = User::create($attributes);

        return response()->json($user,201); //redirect to home page
    }
}
