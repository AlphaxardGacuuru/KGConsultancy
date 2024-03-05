<?php

namespace App\Http\Controllers;

use App\Http\Services\SupplierService;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class SupplierController extends Controller
{
    public function __construct(protected SupplierService $service)
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Models\Supplier  $supplier
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
     * @param  \App\Models\Supplier  $supplier
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
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        //
    }
}
