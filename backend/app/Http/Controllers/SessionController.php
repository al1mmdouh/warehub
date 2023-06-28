<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function store()
    {
        $attributes = request()->validate([
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if(!auth()->attempt($attributes)) {
            throw ValidationException::withMessages([
                'email'=>'Not verified'
            ]);
        }
        session()->regenerate(); // prevent session fixation
        return response()->json("Success, Welcome Back!",200) ;
    }

    public function destroy()
    {
        auth()->logout();
        return response()->json("Success, Goodbye",200) ;
    }
}
