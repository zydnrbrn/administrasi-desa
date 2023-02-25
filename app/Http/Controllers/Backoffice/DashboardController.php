<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Skj;
use App\Models\Resident;
use App\Models\Skk;
use App\Models\Sktm;
use App\Models\Spk;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        try
        {
            $resident = Resident::all()->count();
            $skj = Skj::all()->count();
            $skk = Skk::all()->count();
            $sktm = Sktm::all()->count();
            $spk = Spk::all()->count();
            $letter = $skj + $skk + $sktm + $spk;
            return inertia::render('Dashboard', [
                'resident' => $resident,
                'letter'   => $letter
            ], 200);
        } catch(\Throwable $th) {
            return response()->json([
                'status_code'   => 500,
                'message'       => 'Internal Server Error',
                'errors'        => $th->getMessage()
            ], 500);
        }
    }
}
