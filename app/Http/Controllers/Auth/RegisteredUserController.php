<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:12',
            'secondaryPhone' => 'nullable|string|min:10|max:13',
            'whatsAppPhone' => 'required|string|min:10|max:13',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'supplerName' => 'required|string|max:255',
            'supplierType' => 'required|string|max:255',
            'countriesRegistered' => 'required|array|max:255',
            'countriesInOperation' => 'required|array|max:255',
            'category' => 'required|string|max:255',
            'staff' => 'required|integer|max:255',
            'directors' => 'required|array|max:255',
            // 'hasBusinessRegistration' => 'required|boolean',
            // 'hasBusinessPermit' => 'required|boolean',
            // 'hasTaxCompliance' => 'required|boolean',
            // 'hasLicense' => 'required|boolean',
        ]);

        $user = DB::transaction(function () use ($request) {
            // Create User
            $user = User::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'secondary_phone' => $request->secondaryPhone,
                'whatsapp_phone' => $request->whatsAppPhone,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'account_type' => 'supplier',
            ]);

            // Create Supplier
            $supplier = new Supplier;
            $supplier->user_id = $user->id;
            $supplier->name = $request->supplerName;
            $supplier->type = $request->supplierType;
            $supplier->countries_registered = $request->countriesRegistered;
            $supplier->countries_in_operation = $request->countriesInOperation;
            $supplier->category = $request->category;
            $supplier->staff = $request->staff;
            $supplier->directors = $request->directors;
            $supplier->has_business_registration = $request->hasBusinessRegistration == "on" ? true : false;
            $supplier->has_business_permit = $request->hasBusinessPermit == "on" ? true : false;
            $supplier->has_tax_compliance = $request->hasTaxCompliance == "on" ? true : false;
            $supplier->has_license = $request->hasLicense == "on" ? true : false;
            $supplier->save();

            return $user;
        });

        event(new Registered($user));

        $token = $user
            ->createToken("device_name")
            ->plainTextToken;

        return response([
            "message" => "Logged in",
            "data" => $token,
        ], 200);
    }
}
