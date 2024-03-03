<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $email = fake()->unique()->safeEmail();

        return [
            'name' => fake()->name(),
            'email' => $email,
            'email_verified_at' => now(),
            'password' => Hash::make($email),
            'remember_token' => Str::random(10),
            'phone' => fake()->phoneNumber(),
            'secondary_phone' => fake()->phoneNumber(),
            'whatsapp_phone' => fake()->phoneNumber(),
            'account_type' => 'supplier',
            'created_at' => Carbon::now()->subDay(rand(3, 12)),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Add Joyce Account
     *
     * @return static
     */
    public function joyce()
    {
        return $this->state(fn(array $attributes) => [
            'name' => 'Joyce Koskei',
            'email' => 'joyce.koskei@gmail.com',
            'email_verified_at' => now(),
            'phone' => '0722777990',
            'password' => Hash::make('joyce.koskei@gmail.com'),
            'remember_token' => Str::random(10),
            'account_type' => 'instructor',
        ]);
    }

    /**
     * Add Ciku Account
     *
     * @return static
     */
    public function ciku()
    {
        return $this->state(fn(array $attributes) => [
            'name' => 'Wanjiku Muhandi',
            'email' => 'wgacuru@gmail.com',
            'email_verified_at' => now(),
            'phone' => '0721721357',
            'password' => Hash::make('wgacuru@gmail.com'),
            'remember_token' => Str::random(10),
            'account_type' => 'student',
        ]);
    }
}
