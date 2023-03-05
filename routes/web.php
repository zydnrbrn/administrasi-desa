<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\Letter\LetterController;
use App\Http\Controllers\Backoffice\Resident\ResidentController;
use App\Models\Resident;

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
    Route::get('/surat', [LetterController::class, 'index'])->name('letter');
    Route::get('/penduduk', [ResidentController::class, 'index'])->name('resident');
    Route::get('/buat-sktm', [LetterController::class, 'IndexSktm'])->name('sktm');
    Route::get('/buat-skk', [LetterController::class, 'IndexSkk'])->name('skk');
    Route::get('penduduk/tambah-penduduk', [ResidentController::class, 'create'])->name('add-resident');


    // END


    // ACTION ROUTES START HERE


    Route::post('/store-sktm', [LetterController::class, 'storeSktm'])->name('store-sktm');
    Route::post('/store-skk', [LetterController::class, 'storeSkk'])->name('store-skk');
    Route::delete('/penduduk/{id}',[ResidentController::class, 'destroy']);





    // END
});


// Route::group(function () {
//     Route::get('/not-found', [])
// });
