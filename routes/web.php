<?php

use Inertia\Inertia;
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


    // ROUTE FOR VIEWS START HERE



    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/surat', \App\Http\Controllers\Backoffice\Letter\LetterController::class);
    Route::resource('/penduduk', \App\Http\Controllers\Backoffice\Resident\ResidentController::class);
    Route::get('/sktm', [LetterController::class, 'Sktm']);


    // END


    // ACTION ROUTES START HERE


    Route::post('/store-sktm', [LetterController::class, 'storeSktm'])->name('store-sktm');
    // Route::post('/create-template-sktm', [LetterController::class, 'storeTemplateSktm'])->name('store-template-sktm');





    // END
});


// Route Handler
Route::get('/errors', function () {
    return Inertia::render('Handler/Error/Error');
})->name('errors');


// Route::group(function () {
//     Route::get('/not-found', [])
// });
