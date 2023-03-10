<?php

namespace App\Http\Controllers\Backoffice\Letter;

use App\Models\Letter;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\LetterTemplate;
use Illuminate\Support\Facades\Validator;

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
              $data = DB::table('letters')->join('residents', 'letters.NIK', '=', 'residents.NIK')->where('letters.id', $surat->id)->get();
            if($data) {
                return Inertia::render('Letter/Sktm', [
                    'data'  => $data
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






    public function editTemplateSktm() {
        try
        {
            return Inertia::render('Letter/EditTemplateSktm');
        } catch(\Throwable $th) {
            return Inertia::render('Letter/EditTemplateSktm', [
                'errors'    => $th->getMessage()
            ]);
        }
    }


    public function storeTemplateSktm(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'name'          => ['required'],
                'title'           => ['required'],
                'header'           => ['required'],
                'content'        => ['required'],
                'footer'       => ['required'],
            ]);

            if($validator->fails()) {
                return redirect()->route('template-sktm')->with([
                    'error'     => $validator->errors()
                ], 400);
            }

            $name = $request->name;
            $title = $request->title;
            $header = $request->header;
            $content = $request->content;
            $footer = $request->footer;

            $template = LetterTemplate::crete([
                'name'          => $name,
                'type'          => 'SKTM',
                'title'           => $title,
                'header'           => $header,
                'content'        => $content,
                'footer'       => $footer,
            ]);

            if($template) {
                return response()->json([
                    'success'     => 'Berhasil menambahkan template sktm'
                ], 200);
            } else {
                return response()->json([
                    'failed'     => 'Gagal menambahkan template sktm'
                ], 400);
            }


        } catch(\Throwable $th) {
            return redirect()->route('template-sktm')->with([
                'errors'     => $th->getMessage()
            ], 500);
        }
    }

    public function destroy(Letter $surat) {
        try {
            // $check_id = Letter::select("id")->where("id", $surat)->doesnExist();
            // if($check_id) {
            //     return redirect()->route('surat.index')->with([
            //         'errors'    => 'ID not found'
            //     ]);
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
