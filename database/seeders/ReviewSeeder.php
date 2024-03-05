<?php

namespace Database\Seeders;

use App\Models\Review;
use App\Models\Supplier;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suppliers = Supplier::all();

        foreach ($suppliers as $supplier) {
            Review::factory()
                ->count(rand(5, 10))
                ->create([
                    "supplier_id" => $supplier->id,
                ]);
        }
    }
}
