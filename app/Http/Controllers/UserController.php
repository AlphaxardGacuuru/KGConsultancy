<?php

namespace App\Http\Controllers;

use App\Http\Services\UserService;
use Illuminate\Validation\Rules\Password;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(protected UserService $service)
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $this->service->index($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->service->show($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'nullable|string|max:255',
            'phone' => 'nullable|string|min:10|max:13',
            'secondaryPhone' => 'nullable|string|min:10|max:13',
            'whatsAppPhone' => 'nullable|string|min:10|max:13',
            'password' => ['nullable', 'confirmed', Password::defaults()],
            'supplerName' => 'nullable|string|max:255',
            'supplierType' => 'nullable|string|max:255',
            'countriesRegistered' => 'nullable|array|max:255',
            'countriesInOperation' => 'nullable|array|max:255',
            'category' => 'nullable|string|max:255',
            'staff' => 'nullable|integer|max:255',
            'directors' => 'nullable|array|max:255',
        ]);

        [$saved, $message, $supplier] = $this->service->update($request, $id);

        return response([
            "status" => $saved,
            "message" => $message,
            "data" => $supplier,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /*
     * Get the Auth User
     */
    public function auth()
    {
        return $this->service->auth();
    }
}
