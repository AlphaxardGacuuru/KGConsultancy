<?php

namespace App\Http\Services;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService extends Service
{
    /*
     * Get All Users
     */
    public function index($request)
    {
        if ($request->filled("idAndName")) {
            $users = User::orderBy("id", "DESC")
                ->get();

            return response([
                "data" => $users,
            ], 200);
        }

        $users = User::orderBy("id", "DESC")->paginate(20);

        return UserResource::collection($users);
    }

    /*
     * Get One User
     */
    public function show($id)
    {
        $user = User::find($id);

        return new UserResource($user);
    }

    /*
     * Update Supplier
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

        if ($request->filled("secondaryPhone")) {
            $user->secondary_phone = $request->secondaryPhone;
        }

        if ($request->filled("whatsAppPhone")) {
            $user->whatsapp_phone = $request->whatsAppPhone;
        }

        if ($request->filled("password")) {
            $user->password = Hash::make($request->password);
        }

        $saved = $user->save();

        // Update Supplier
        $supplier = $user->supplier;

        if ($request->filled("supplerName")) {
            $supplier->name = $request->supplerName;
        }

        if ($request->filled("supplierType")) {
            $supplier->type = $request->supplierType;
        }

        if ($request->filled("countriesRegistered")) {
            $supplier->countries_registered = $request->countriesRegistered;
        }

        if ($request->filled("countriesInOperation")) {
            $supplier->countries_in_operation = $request->countriesInOperation;
        }

        if ($request->filled("category")) {
            $supplier->category = $request->category;
        }

        if ($request->filled("staff")) {
            $supplier->staff = $request->staff;
        }

        if ($request->filled("directors")) {
            $supplier->directors = $request->directors;
        }

        $supplier->has_business_registration = $request->hasBusinessRegistration;

        $supplier->has_business_permit = $request->hasBusinessPermit;

        $supplier->has_tax_compliance = $request->hasBusinessPermit;

        $supplier->has_license = $request->hasLicense;

        $supplier->save();

        return [$saved, "Account Updated", $user];
    }

    /**
     * Get Auth.
     *
     */
    public function auth()
    {
        if (auth("sanctum")->check()) {

            $auth = auth('sanctum')->user();

            // Check if user is supplier
            return new UserResource($auth);
        } else {
            return response(["message" => "Not Authenticated"], 401);
        }
    }
}
