<?php

namespace App\Http\Services;

use App\Http\Resources\SupplierResource;
use App\Http\Resources\UserResource;

class UserService extends Service
{
    /**
     * Get Auth.
     *
     */
    public function auth()
    {
        if (auth("sanctum")->check()) {

            $auth = auth('sanctum')->user();

            // Check if user is supplier
            if ($auth->account_type == "supplier") {
                return new SupplierResource($auth->supplier);
            } else {
                return new UserResource($auth);
            }
        } else {
            return response(["message" => "Not Authenticated"], 401);
        }
    }
}
