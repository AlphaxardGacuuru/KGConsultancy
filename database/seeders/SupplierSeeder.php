<?php

namespace Database\Seeders;

use App\Models\Supplier;
use App\Models\User;
use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Get Users
        $users = User::where("account_type", "supplier")
            ->get();

        foreach ($users as $user) {
            Supplier::factory()->create([
                "user_id" => $user->id,
            ]);
        }
    }
}
