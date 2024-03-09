<?php

namespace App\Http\Controllers;

use App\Http\Services\StaffService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class StaffController extends Controller
{
    public function __construct(protected StaffService $service)
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
        $this->validate($request, [
            "name" => "required|string|unique:roles",
            'phone' => 'required|string|unique:users|min:10|max:13',
            'email' => 'required|string|email|max:255|unique:users',
            "roleId" => "required|integer",
        ]);

        [$saved, $message, $role] = $this->service->store($request);

        return response([
            "status" => $saved,
            "message" => $message,
            "data" => $role,
        ], 200);
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
            'password' => ['nullable', 'confirmed', Password::defaults()],
            "roleId" => "required|integer",
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
}
