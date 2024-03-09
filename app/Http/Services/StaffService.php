<?php

namespace App\Http\Services;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StaffService extends Service
{
    /*
     * Get All Staff
     */
    public function index($request)
    {
        if ($request->filled("idAndName")) {
            $staff = User::with("roles")->orderBy("id", "DESC")
                ->get();

            return response([
                "data" => $staff,
            ], 200);
        }

        $staff = User::with("role")
            ->where("account_type", "admin")
            ->orderBy("id", "DESC")
            ->paginate(20);

        return UserResource::collection($staff);
    }

    /*
     * Get One Staff
     */
    public function show($id)
    {
        $staff = User::find($id);

        return new UserResource($staff);
    }

    /*
     * Store Staff
     */
    public function store($request)
    {
        $staff = new User;
        $staff->name = $request->name;
        $staff->phone = $request->phone;
        $staff->email = $request->email;
        $staff->password = Hash::make($request->email);
        $staff->account_type = 'admin';

        $saved = DB::transaction(function () use ($request, $staff) {
            $staff->save();

            $userRole = new UserRole;
            $userRole->user_id = $staff->id;
            $userRole->role_id = $request->roleId;

            return $userRole->save();
        });

        $message = $staff->name . " created";

        return [$staff, $message, $saved];
    }

    /*
     * Update Staff
     */
    public function update($request, $id)
    {
        $user = User::find($id);

        if ($request->filled("name")) {
            $user->name = $request->name;
        }

        if ($request->filled("phone")) {
            $user->phone = $request->phone;
        }

        if ($request->filled("password")) {
            $user->password = Hash::make($request->password);
        }

        if ($request->filled("roleId")) {
            UserRole::find($id)->delete();

            $userRole = new UserRole;
            $userRole->user_id = $id;
            $userRole->role_id = $request->roleId;
            $userRole->save();
        }

        $saved = $user->save();

        return [$saved, "Account Updated", $user];
    }
}
