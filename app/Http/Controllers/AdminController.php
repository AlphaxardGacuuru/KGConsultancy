<?php

namespace App\Http\Controllers;

use App\Http\Services\AdminService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct(protected AdminService $service)
    {
        //
    }

    /*
     * Get Dashboard Data
     */
    public function index()
    {
        return $this->service->index();
    }
}
