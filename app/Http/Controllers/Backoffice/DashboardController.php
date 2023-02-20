<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Letter;
use App\Models\Resident;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        try
        {
            $resident = Resident::all()->count();
            $letter = Letter::all()->count();
            return inertia::render('Dashboard', [
                'resident' => $resident,
                'letter'   => $letter
            ], 200);
        } catch(\Throwable $th) {
            return response()->json([
                'status_code'   => 500,
                'message'       => 'Internal Server Error'
            ], 500);
        }
    }
}
