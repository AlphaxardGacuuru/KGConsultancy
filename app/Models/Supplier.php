<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'countries_registered' => 'array',
        'countries_in_operation' => 'array',
        'directors' => 'array',
    ];

    /*
     * Relationships
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    /*
     * Custom Functions
     */

    // Calculate Rating
    public function rating()
    {
        $ones = $this->ratings
            ->where("rating", 1)
            ->count();

        $twos = $this->ratings
            ->where("rating", 2)
            ->count();

        $threes = $this->ratings
            ->where("rating", 3)
            ->count();

        $fours = $this->ratings
            ->where("rating", 4)
            ->count();

        $fives = $this->ratings
            ->where("rating", 5)
            ->count();

        $total = $this->ratings->count();

        // Get average but check if total is greater than zero
        if ($total) {

            $rating = ($ones * 1) + ($twos * 2) + ($threes * 3) + ($fours * 4) + ($fives * 5);

            return round($rating / $total, 1);
        }
    }
}
