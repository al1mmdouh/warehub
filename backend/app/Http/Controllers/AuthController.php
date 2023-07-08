<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Auth;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    protected AuthService $authService;

    public function __construct(AuthService $userService)
    {
        $this->authService = $userService;
    }

    public function register(RegisterRequest $request)
    {
        try {
            $validated = $request->validated();

            $user = $this->authService->register($validated);

            return response()->json($user, 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 400);
        }
    }

    public function login(LoginRequest $request)
    {
        try {
            $credentials = $request->validated();

            $data = $this->authService->authenticate($credentials);

<<<<<<< HEAD
            return response()->json($data, 200);

=======
            return response()->json('Success, Welcome Back!', 200);
>>>>>>> origin/backend-orders-management
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->errors()], 400);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Failed to create token'], 500);
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json('Success, Goodbye', 200);
    }
}