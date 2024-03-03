<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $type = ["Women Owned", "Disability", "General"];

        $categories = ["services", "goods", "works", "consultancy"];

        $boolean = [true, false];

        return [
            'name' => fake()->company(),
            'user_id' => User::where('account_type', 'supplier')
                ->get()
                ->random()
                ->id,
            'countries_registered' => [
                fake()->country(),
                fake()->country(),
                fake()->country(),
            ],
            'countries_in_operation' => [
                fake()->country(),
                fake()->country(),
                fake()->country(),
            ],
            'type' => $type[rand(0, 2)],
            'category' => $categories[rand(0, 3)],
            'directors' => [
                fake()->name(),
                fake()->name(),
                fake()->name(),
            ],
            'staff' => rand(0, 100),
            'has_business_registration' => $boolean[rand(0, 1)],
            'has_business_permit' => $boolean[rand(0, 1)],
            'has_tax_compliance' => $boolean[rand(0, 1)],
            'has_license' => $boolean[rand(0, 1)],
        ];
    }
}
