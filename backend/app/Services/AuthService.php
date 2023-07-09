<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Validation\ValidationException;


class AuthService
{
    public function register(array $validated): User
    {
         return User::create($validated);
        // $user = User::create($$validated);
        // $user->notify(new RegisterNotification());
        // return $user;
            // $user = User::create($validated);
            
            // return $user;   
    }

    public function authenticate(array $credentials): bool
    {
        if(!auth()->attempt($credentials)) {
            throw ValidationException::withMessages([
                'email'=>'Not verified'
            ]);
        }
        session()->regenerate(); // prevent session fixation

        return true;
    }


}
