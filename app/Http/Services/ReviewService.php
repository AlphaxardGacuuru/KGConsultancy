<?php

namespace App\Http\Services;

use App\Http\Resources\ReviewResource;
use App\Models\Review;

class ReviewService extends Service
{
    /*
     * Get All Reviews
     */
    public function show($id)
    {
        $reviews = Review::where("supplier_id", $id)->paginate(20);

        return ReviewResource::collection($reviews);
    }
}
