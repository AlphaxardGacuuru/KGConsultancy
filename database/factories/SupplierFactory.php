<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
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
        $countries = [
            "Algeria",
            "Nigeria",
            "South Africa",
            "Egypt",
            "Kenya",
            "Ethiopia",
            "Morocco",
            "Ghana",
            "Angola",
            "Tanzania",
        ];

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
				$countries[rand(0, 9)],
				$countries[rand(0, 9)],
				$countries[rand(0, 9)],
            ],
            'countries_in_operation' => [
				$countries[rand(0, 9)],
				$countries[rand(0, 9)],
				$countries[rand(0, 9)],
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
            "created_at" => Carbon::now()->subDay(rand(3, 12)),
        ];
    }
}
