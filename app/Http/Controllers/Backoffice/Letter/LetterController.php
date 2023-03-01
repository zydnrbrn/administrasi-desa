<?php

namespace App\Http\Controllers\Backoffice\Letter;

use App\Models\Skj;
use App\Models\Skk;
use App\Models\Spk;
use App\Models\Sktm;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class LetterController extends Controller
{
    public function index() {

        try {
            $jurnal_sktm =  Sktm::all();
            $jurnal_skk = Skk::all();
            $jurnal_spk = Spk::all();
            $jurnal_skj = Skj::all();
            return Inertia::render('Letter', [
                'sktm'  => $jurnal_sktm,
                'skk'   => $jurnal_skk,
                'spk'   => $jurnal_spk,
                'skj'   => $jurnal_skj
            ]);
        } catch (\Throwable) {
            return Inertia::render('Letter', [
                'error' => 'Internal Server Error'
            ]);
        }

    }

    public function createSKTM (Request $request) {
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

            $sktm = Sktm::create([
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


    public function createSKK (Request $request) {
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

            $skk = Skk::create([
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

            $spk = Spk::create([
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

            $skj = Skj::create([
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
            $check_id = Sktm::select("id")->where("id", $id)->doesnExist();
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
