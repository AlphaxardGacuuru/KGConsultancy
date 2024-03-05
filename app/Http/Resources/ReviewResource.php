<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "text" => $this->text,
            "supplierId" => $this->supplierId,
            "name" => "User",
            // "avatar" => $this->user->avatar,
            "updatedAt" => $this->updated_at,
            "createdAt" => $this->created_at,
        ];
    }
}
