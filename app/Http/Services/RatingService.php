<?php

namespace App\Http\Services;

use App\Models\Rating;

class RatingService extends Service
{
    /*
     * Store
     */
    public function store($request)
    {
        $rating = new Rating;
        $rating->supplier_id = $request->supplierId;
        $rating->rating = $request->rating;
        $saved = $rating->save();

        return [$saved, "Rating Saved", $rating];
    }
}
