<?php

namespace App\Http\Controllers\Backoffice\Letter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LetterController extends Controller
{
    public function index() {
        return Inertia::render('Letter', [
            
        ]);
    }
}
