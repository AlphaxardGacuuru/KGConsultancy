<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::factory()
            ->create([
                "name" => "Super Admin",
                "description" => "Has All Access",
                "permissions" => [
                    "suppliers.create",
                    "suppliers.read",
                    "suppliers.update",
                    "suppliers.destory",
                    "roles.create",
                    "roles.read",
                    "roles.update",
                    "roles.destory",
                    "staff.create",
                    "staff.read",
                    "staff.update",
                    "staff.destory",
                ],
            ]);
    }
}
