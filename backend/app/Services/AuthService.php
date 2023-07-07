<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthService
{
    public function register(array $validated): User
    {
        return User::create($validated);
    }

    public function authenticate(array $credentials): bool
    {
        if (! auth()->attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => 'Not verified',
            ]);
        }
        session()->regenerate(); // prevent session fixation

        return true;
    }
}
