<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\Letter\LetterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('dashboard');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/surat', [LetterController::class, 'index'])->name('surat');
});


// Route::group(function () {
//     Route::get('/not-found', [])
// });
