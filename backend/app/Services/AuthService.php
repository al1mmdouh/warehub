<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\JWTAuth;

class AuthService
{
    protected $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function register(array $validated): User
    {
        return User::create($validated);
    }

    public function authenticate(array $credentials): array
    {
        if (!auth()->attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => 'Not verified'
            ]);
        }
        // session()->regenerate(); // prevent session fixation

        $user  = auth()->user();
        $token = $this->jwtAuth->fromUser($user, $user->getJWTCustomClaims());


        return [
            'token' => $token,
        ];
    }


}
