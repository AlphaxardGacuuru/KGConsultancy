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

    /*
     * Store Review
     */
    public function store($request)
    {
        $review = new Review;
        $review->supplier_id = $request->to;
        $review->text = $request->text;
        $saved = $review->save();

        return [$saved, "Review saved successfully", $review];
    }
}
