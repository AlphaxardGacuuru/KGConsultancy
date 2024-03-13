<?php

namespace App\Http\Services;

use App\Http\Resources\ChatResource;
use App\Models\Chat;
use App\Models\User;

class ChatService extends Service
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getChat = Chat::where('user_id', $this->id)
            ->orWhere('to', $this->id)
            ->orderBy('id', 'DESC')
            ->get();

        $chatThreadsZero = [];
        $chatThreads = [];

        // Get sender and recipient
        foreach ($getChat as $key => $chatItem) {
            array_push($chatThreadsZero, $chatItem->user_id);
            array_push($chatThreadsZero, $chatItem->to);
        }

        // Get only unique entries
        $chatThreadsZero = array_unique($chatThreadsZero);

        // Remove auth user_id
        $key = array_search($this->id, $chatThreadsZero);

        unset($chatThreadsZero[$key]);

        // Get threads
        foreach ($chatThreadsZero as $key => $user_id) {
            $chat = Chat::where('user_id', $this->id)
                ->where('to', $user_id)
                ->orWhere('user_id', $user_id)
                ->where('to', $this->id)
                ->orderBy('id', 'DESC')
                ->first();

            // Get user info
            $chatUser = User::where('user_id', $user_id)->first();

            array_push($chatThreads, [
                'id' => $chat->id,
                'avatar' => $chatUser->avatar,
                'name' => $chatUser->name,
                'user_id' => $user_id,
                'to' => $chat->to,
                'text' => $chat->text,
                'hasMedia' => $chat->media,
                'createdAt' => $chat->created_at,
            ]);
        }

        return ["data" => $chatThreads];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        $getChat = Chat::where("user_id", $this->id)
            ->where("to", $user_id)
            ->orWhere("user_id", $user_id)
            ->where("to", $this->id)
            ->orderBy('id', 'ASC')
            ->paginate(10);

        return ChatResource::collection($getChat);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($request)
    {
        /* Create new post */
        $chat = new Chat;
        $chat->user_id = auth("sanctum")->user()->id;
        $chat->to = $request->input('to');
        $chat->text = $request->input('text');
        $chat->media = $request->input('media');
        $saved = $chat->save();

        $message = "Chat sent";

        return [$saved, $message, $chat];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $chatItem = Chat::find($id);

        $media = substr($chatItem->media, 9);

        Storage::delete('public/' . $media);

        $deleted = Chat::find($id)->delete();

        return [$deleted, "Chat deleted"];
    }
}
