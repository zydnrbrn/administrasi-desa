<?php

namespace App\Http\Controllers\Backoffice\Letter;

use App\Models\Letter;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class LetterController extends Controller
{
    public function index() {

        try {
            $surat = Letter::orderBy('created_at', 'asc')->paginate(10);
            return Inertia::render('Letter/Index', [
                'surat' => $surat
            ]);
        } catch (\Throwable) {
            return Inertia::render('Letter/Index', [
                'error' => 'Internal Server Error'
            ]);
        }

    }


    public function indexSktm () {
        return Inertia::render('Letter/CreateSktm');
    }

    public function storeSktm (Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'no_surat'      => ['required'],
                'nama'          => ['required'],
                'nik'           => ['required'],
                'ttl'           => ['required'],
                'gender'        => ['required'],
                'address'       => ['required'],
                'status'        => ['required'],
                'keterangan'    => ['required'],
                'digunakan'     => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Letter', [
                    'errors'     => $validator->errors()
                ]);
            }

            $nosurat = $request->input('no_surat');
            $nama = $request->input('name');
            $nik = $request->input('nik');
            $ttl = $request->input('ttl');
            $gender = $request->input('gender');
            $address = $request->input('address');
            $status = $request->input('status');
            $keterangan = $request->input('keterangan');
            $digunakan = $request->input('digunakan');

            $sktm = Letter::create([
                'no_surat'      => $nosurat,
                'nama'          => $nama,
                'nik'           => $nik,
                'ttl'           => $ttl,
                'gender'        => $gender,
                'address'       => $address,
                'status'        => $status,
                'keterangan'    => $keterangan,
                'digunakan'     => $digunakan
            ]);

            if($sktm) {
                return redirect()->route('letter')->with([
                    'success'       => 'Berhasil menambahkan surat'
                ]);
            } else {
                return redirect()->route('letter')->with([
                    'failed'       => 'Gagal menambahkan surat'
                ]);
            }

        } catch(\Throwable $th) {
            return redirect()->route('letter')->with([
                'errors'        => $th->getMessage()
            ]);
        }
    }

    public function indexSkk() {
        return Inertia::render('Letter/CreateSkk');
    }



    public function storeSKK (Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'no_surat'      => ['required'],
                'nama'          => ['required'],
                'nik'           => ['required'],
                'ttl'           => ['required'],
                'gender'        => ['required'],
                'address'       => ['required'],
                'status'        => ['required'],
                'keterangan'    => ['required'],
                'digunakan'     => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Handler/Error/Failed', [
                    'error'     => $validator->errors()
                ]);
            }

            $nosurat = $request->no_surat;
            $nama = $request->nama;
            $nik = $request->nik;
            $ttl = $request->ttl;
            $gender = $request->gender;
            $address = $request->address;
            $status = $request->status;
            $keterangan = $request->keterangan;
            $digunakan = $request->digunakan;

            $skk = Letter::create([
                'no_surat'      => $nosurat,
                'nama'          => $nama,
                'nik'           => $nik,
                'ttl'           => $ttl,
                'gender'        => $gender,
                'address'       => $address,
                'status'        => $status,
                'keterangan'    => $keterangan,
                'digunakan'     => $digunakan
            ]);

            if($skk) {
                return Inertia::render('Handler/Success/Congrats', [
                    'success'   => 'Success create letter'
                ]);
            } else {
                return Inertia::render('Handler/Error/Failed', [
                    'errors'    => 'Failed create letter'
                ]);
            }

        } catch(\Throwable $th) {
            return Inertia::render('Handler/Error/Failed', [
                'errors'    => $th->getMessage()
            ]);
        }
    }
    public function createSPK (Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'no_surat'      => ['required'],
                'nama'          => ['required'],
                'nik'           => ['required'],
                'ttl'           => ['required'],
                'gender'        => ['required'],
                'address'       => ['required'],
                'status'        => ['required'],
                'keterangan'    => ['required'],
                'digunakan'     => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Handler/Error/Failed', [
                    'error'     => $validator->errors()
                ]);
            }

            $nosurat = $request->no_surat;
            $nama = $request->nama;
            $nik = $request->nik;
            $ttl = $request->ttl;
            $gender = $request->gender;
            $address = $request->address;
            $status = $request->status;
            $keterangan = $request->keterangan;
            $digunakan = $request->digunakan;

            $spk = Letter::create([
                'no_surat'      => $nosurat,
                'nama'          => $nama,
                'nik'           => $nik,
                'ttl'           => $ttl,
                'gender'        => $gender,
                'address'       => $address,
                'status'        => $status,
                'keterangan'    => $keterangan,
                'digunakan'     => $digunakan
            ]);

            if($spk) {
                return Inertia::render('Handler/Success/Congrats', [
                    'success'   => 'Success create letter'
                ]);
            } else {
                return Inertia::render('Handler/Error/Failed', [
                    'errors'    => 'Failed create letter'
                ]);
            }

        } catch(\Throwable $th) {
            return Inertia::render('Handler/Error/Failed', [
                'errors'    => $th->getMessage()
            ]);
        }
    }
    public function createSKJ (Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'no_surat'      => ['required'],
                'nama'          => ['required'],
                'nik'           => ['required'],
                'ttl'           => ['required'],
                'gender'        => ['required'],
                'address'       => ['required'],
                'status'        => ['required'],
                'keterangan'    => ['required'],
                'digunakan'     => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Handler/Error/Failed', [
                    'error'     => $validator->errors()
                ]);
            }

            $nosurat = $request->no_surat;
            $nama = $request->nama;
            $nik = $request->nik;
            $ttl = $request->ttl;
            $gender = $request->gender;
            $address = $request->address;
            $status = $request->status;
            $keterangan = $request->keterangan;
            $digunakan = $request->digunakan;

            $skj = Letter::create([
                'no_surat'      => $nosurat,
                'nama'          => $nama,
                'nik'           => $nik,
                'ttl'           => $ttl,
                'gender'        => $gender,
                'address'       => $address,
                'status'        => $status,
                'keterangan'    => $keterangan,
                'digunakan'     => $digunakan
            ]);

            if($skj) {
                return Inertia::render('Handler/Success/Congrats', [
                    'success'   => 'Success create letter'
                ]);
            } else {
                return Inertia::render('Handler/Error/Failed', [
                    'errors'    => 'Failed create letter'
                ]);
            }

        } catch(\Throwable $th) {
            return Inertia::render('Handler/Error/Failed', [
                'errors'    => $th->getMessage()
            ]);
        }
    }

    public function destroySKTM($id) {
        try {
            $check_id = Letter::select("id")->where("id", $id)->doesnExist();
            if($check_id) {
                return Inertia::render('Handler/Error/Failed', [
                    'errors'        => 'ID not found'
                ]);

                $query = "DELETE FROM sktms WHERE id = ? ";
                $delete = DB::select($query, [$id]);

                if($delete) {
                    return Inertia::render('/Handler/Success/Congrats', [
                        'success'   => 'Success Delete Letter'
                    ]);
                } else {
                    return Inertia::render('Handler/Error/Failed', [
                        'errors'    => 'Failed Delete Letter'
                    ]);
                }
            }
        } catch (\Throwable $th) {

        }
    }
}
