<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChatThreadResource extends JsonResource
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
            "name" => $this->recipient->name,
            "avatar" => $this->recipient->avatar,
            "userId" => $this->user_id,
            "to" => $this->to,
            "text" => $this->text,
            // "media" => $this->media,
            // 'hasMedia' => $chat->media,
            "createdAt" => $this->created_at,
        ];
    }
}
