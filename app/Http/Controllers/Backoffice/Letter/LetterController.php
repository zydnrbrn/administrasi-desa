<?php

namespace App\Http\Controllers\Backoffice\Letter;

use App\Models\Letter;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\LetterTemplate;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade as PDF;


class LetterController extends Controller
{
    public function index() {

        try {
            $data = DB::table('letters')->orderBy('NIK', 'asc')->paginate(10);
            return Inertia::render('Letter/Index', [
                'surat' => $data
            ]);
        } catch (\Throwable $th) {
            return Inertia::render('Letter/Index', [
                'errors' => $th->getMessage()
            ]);
        }

    }


    public function Sktm() {
        return Inertia::render('Letter/Template/Sktm');
    }


    public function show(Letter $surat) {
        try {
              $data = DB::table('letters')->join('residents', 'letters.NIK', '=', 'residents.NIK')->join('address', 'residents.id', '=', 'address.resident_id')->where('letters.id', $surat->id)->get();
            if($data) {
                return Inertia::render('Letter/Sktm', [
                    'data'  => $data[0]
                ]);
            } else {
                return Inertia::render('Letter/Index', [
                    'errors'    => 'Gagal mendapatkan data surat'
                ]);
            }
        } catch(\Throwable $th) {
            return Inertia::render('Letter/Sktm', [
                'errors'    => $th->getMessage()
            ]);
        }
    }

    public function store(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'no_surat'      => ['required'],
                'nik'           => ['required'],
                'objective'     => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Letter/CreateSktm', [
                    'errors'    => $validator->errors()
                ]);
            }

            $nik = $request->nik;
            $no_surat = $request->no_surat;
            $object = $request->objective;

            $sktm = Letter::create([
                'NIK'           => $nik,
                'no_surat'      => $no_surat,
                'objective'     => $object,
                'type'          => 'SKTM'
            ]);

            if($sktm) {
                return redirect()->route('surat.index')->with([
                    'success'       => 'Berhasil menambahkan surat'
                ], 200);
            } else {
                return redirect()->route('surat.index')->with([
                    'errors'       => 'Gagal menambahkan surat'
                ], 400);
            }

        } catch(\Throwable $th) {
            return redirect()->route('surat.create')->with([
            ], 500);
        }
    }

    public function create() {
        return Inertia::render('Letter/CreateSktm');
    }


    public function destroy(Letter $surat) {
        try {
              $surat->delete();
                if($surat) {
                    return redirect()->route('surat.index')->with([
                        'success'    => 'Berhasil menghapus data'
                    ]);
                } else {
                    return redirect()->route('surat.index')->with([
                        'errors'    => 'Gagal menghapus data'
                    ]);
            }
        } catch (\Throwable $th) {
            return Inertia::render('Letter/Index', [
                'errors'    => $th->getMessage()
            ]);
        }
    }
}
