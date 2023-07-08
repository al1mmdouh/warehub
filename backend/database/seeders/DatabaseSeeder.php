<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Business;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $adminCredentials = require __DIR__.'/../../admin_credentials.php';

        User::factory()->create([
<<<<<<< HEAD
            'name' => $adminCredentials['name'],
            'email' => $adminCredentials['email'],
            'role' => $adminCredentials['role'],
            'password' => $adminCredentials['password']
=======
            'name' => 'Warehub Admin',
            'email' => 'admin@warehub.com',
            'role' => '1',
            'password' => 'password',
>>>>>>> origin/backend-orders-management
        ]);
        User::factory(10)->create([
            'role' => '0',
        ]);
        Business::factory()
            ->count(5)
            ->create();
    }
}
