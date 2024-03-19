<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::get('auth', [UserController::class, 'auth']);

// Define a middleware group for authenticated and verified users
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::apiResources([
        "users" => UserController::class,
        "suppliers" => SupplierController::class,
        "ratings" => RatingController::class,
        "reviews" => ReviewController::class,
        "roles" => RoleController::class,
        "staff" => StaffController::class,
        "chats" => ChatController::class,
    ]);
});

/*
 * Admin Dashboard
 */
Route::get("admin", [AdminController::class, "index"]);

Route::get('/mailable', function () {
    $user = App\Models\User::find(1);

    return new App\Mail\WelcomeMail($user);
});
