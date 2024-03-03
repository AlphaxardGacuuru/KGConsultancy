<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Check if Joyce or Ciku exists
        $joyceDoesntExist = User::where('email', 'joyce.koskei@gmail.com')
            ->doesntExist();

        $cikuDoesntExist = User::where('email', 'wgacuru@gmail.com')
            ->doesntExist();

        if ($joyceDoesntExist) {
            User::factory()->joyce()->create();
        }

        if ($cikuDoesntExist) {
            User::factory()->ciku()->create();
        }

        User::factory()->count(100)->create();
    }
}
