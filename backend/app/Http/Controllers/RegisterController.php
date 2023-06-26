<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store() {

        $attributes = request()->validate([
            'name'=>'required|max:255',
            'email'=>'required|email|max:255',
            'password'=>'required|max:255|min:7',
            'phone_number' => 'required|max:255',
            'address' => 'required|max:255',
        ]);
        
        User::create($attributes);

        return redirect('/'); //redirect to home page
    }
}
