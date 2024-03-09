<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::where("account_type", "admin")
            ->get();

        foreach ($users as $user) {
            UserRole::factory()->create([
                "user_id" => $user->id,
                "role_id" => Role::first()->id,
            ]);
        }
    }
}
