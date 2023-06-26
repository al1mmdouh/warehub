<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'business_name' => $this->fake()->company(),
            'business_address' => $this->fake()->address(),
            'business_type' => $this->fake()->randomElement(['Warehouse', 'Product']),
        ];
    }
}
