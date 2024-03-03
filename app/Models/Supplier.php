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
}
