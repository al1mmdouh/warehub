<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function createUser(array $validated): User
    {
        return User::create($validated);
    }
}