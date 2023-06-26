<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
         User::factory()->create([
             'name'=>'Warehub Admin',
             'email'=>'admin@warehub.com',
             'role'=>'1',
             'password'=>"password"
         ]);
        User::factory(10)->create([
            'role'=>'0'
        ]);
    }
}
