<?php

namespace App\Http\Controllers\Backoffice\Resident;

use Inertia\Inertia;
use App\Models\Address;
use App\Models\Resident;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;

class ResidentController extends Controller
{
    public function index() {
        try
        {
            $query = "SELECT * FROM residents";
            $resident = DB::select($query);
            if($resident) {
                return Inertia::render('Resident', [
                    'success'   => 'Berhasil mendapatkan list penduduk .'
                ]);
            } else {
                return Inertia::render('Resident', [
                    'failed'    => 'Gagal mendapatkan list penduduk .'
                ]);
            }
        } catch(\Throwable $th) {
            return Inertia::render('Handler/Failed/Error', [
                'errors'        => $th->getMessage()
            ]);
        }
    }


    public function store(Request $request) {
        DB::transaction();
        try {
            $provinces = \Indonesia::allProvinces()->pluck('id')->toArray();
            $cities = \Indonesia::findProvince($request['user_address']['province_id'], ['cities'])->cities->pluck('id')->toArray();
            $districts = \Indonesia::findCity($request['user_address']['city_id'], ['districts'])->districts->pluck('id')->toArray();
            $villages = \Indonesia::findDistrict($request['user_address']['district_id'], ['villages'])->villages->pluck('id')->toArray();
            $validator = Validator::make($request->all(), [
                'nik'                  => ['required', 'integer'],
                'no_kk'                => ['required', 'integer'],
                'nama'                 => ['required', 'string'],
                'ttl'                  => ['required'],
                'province_id'                => ['required', 'string', Rule::in($provinces)],
                'city_id'                    => ['required', 'string', Rule::in($cities)],
                'district_id'                => ['required', 'string', Rule::in($districts)],
                'villages'                   => ['required', 'string', Rule::in($villages)],
                'RT'                         => ['nullable', 'string', 'max:6'],
                'RW'                         => ['nullable', 'string', 'max:6'],
                'alamat_lengkap'             => ['nullalbe', 'string'],
                'gender'               => ['required'],
                'agama'                => ['required'],
                'status_perkawinan'    => ['required'],
                'pekerjaan'            => ['required'],
                'kewarganegaraan'      => ['required'],
                'berlaku_sampai'       => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Handler/Failed/Error', [
                    'error'     => $validator->errors()
                ]);
            }

            $nik = $request->nik;
            $no_kk = $request->no_kk;
            $nama = $request->nama;
            $ttl = $request->ttl;
            $alamat = $request->alamat;
            $gender = $request->gender;
            $agama = $request->agama;
            $status = $request->status_perkawinan;
            $job = $request->pekerjaan;
            $citizenship = $request->kewarganegaraan;
            $valid = $request->berlaku_sampai;

            $resident = Resident::create([
                'NIK'                       => $nik,
                'KK_code'                   => $no_kk,
                'nama'                       => $nama,
                'date_place_birth'           => $ttl,
                'alamat'                    => $alamat,
                'gender'                     => $gender,
                'religion'                       => $agama,
                'marital_status'            => $status,
                'job'                       => $job,
                'citizenship'               => $citizenship,
                'valid_until'               => $valid
            ]);

            Address::create([
                'resident_id'      => $resident->id,
                'province' => \Indonesia::findProvince($request['province_id'], $with = null)->name,
                'province_id' => $request['province_id'],
                'city' => \Indonesia::findCity($request['city_id'], $with = null)->name,
                'city_id' => $request['city_id'],
                'district' => \Indonesia::findDistrict($request['district_id'], $with = null)->name,
                'district_id' => $request['district_id'],
                'village' => \Indonesia::findVillage($request['village_id'], $with = null)->name,
                'village_id' => $request['village_id'],
                'rt' => $request['rt'],
                'rw' => $request['rw'],
                'latitude' => $request['latitude'],
                'longitude' => $request['longitude'],
                'address_detail' => $request['alamat_lengkap']
            ]);

            if($resident) {
                return Inertia::render('Handler/Succes/Congrat', [
                    'success'       => 'Berhasil menambahkan penduduk'
                ]);
            } else {
                return Inertia::render('Handler/Error/Failed', [
                    'failed'        => 'Gagal menambahkan penduduk'
                ]);
            }

            DB::commit();
        } catch (\Throwable $th) {
            return Inertia::render('Handler/Error/Error', [
                'error'             => 'Internal Server Error'
            ]);
        }

    }



    public function update(Request $request) {
        DB::transaction();
        try {
            $provinces = \Indonesia::allProvinces()->pluck('id')->toArray();
            $cities = \Indonesia::findProvince($request['user_address']['province_id'], ['cities'])->cities->pluck('id')->toArray();
            $districts = \Indonesia::findCity($request['user_address']['city_id'], ['districts'])->districts->pluck('id')->toArray();
            $villages = \Indonesia::findDistrict($request['user_address']['district_id'], ['villages'])->villages->pluck('id')->toArray();
            $validator = Validator::make($request->all(), [
                'resident_id'           => ['required'],
                'nik'                  => ['required', 'integer'],
                'no_kk'                => ['required', 'integer'],
                'nama'                 => ['required', 'string'],
                'ttl'                  => ['required'],
                'province_id'                => ['required', 'string', Rule::in($provinces)],
                'city_id'                    => ['required', 'string', Rule::in($cities)],
                'district_id'                => ['required', 'string', Rule::in($districts)],
                'villages'                   => ['required', 'string', Rule::in($villages)],
                'RT'                         => ['nullable', 'string', 'max:6'],
                'RW'                         => ['nullable', 'string', 'max:6'],
                'alamat_lengkap'             => ['nullalbe', 'string'],
                'gender'               => ['required'],
                'agama'                => ['required'],
                'status_perkawinan'    => ['required'],
                'pekerjaan'            => ['required'],
                'kewarganegaraan'      => ['required'],
                'berlaku_sampai'       => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Handler/Failed/Error', [
                    'error'     => $validator->errors()
                ]);
            }

            $r_id = $request->resident_id;
            $nik = $request->nik;
            $no_kk = $request->no_kk;
            $nama = $request->nama;
            $ttl = $request->ttl;
            $alamat = $request->alamat;
            $gender = $request->gender;
            $agama = $request->agama;
            $status = $request->status_perkawinan;
            $job = $request->pekerjaan;
            $citizenship = $request->kewarganegaraan;
            $valid = $request->berlaku_sampai;

            $resident = Resident::find($r_id);
            $resident->update([
                'NIK'                       => $nik,
                'KK_code'                   => $no_kk,
                'nama'                       => $nama,
                'date_place_birth'           => $ttl,
                'alamat'                    => $alamat,
                'gender'                     => $gender,
                'religion'                       => $agama,
                'marital_status'            => $status,
                'job'                       => $job,
                'citizenship'               => $citizenship,
                'valid_until'               => $valid
            ]);

            Address::where('resident_id', $r_id)->update([
                'province' => \Indonesia::findProvince($request['province_id'], $with = null)->name,
                'province_id' => $request['province_id'],
                'city' => \Indonesia::findCity($request['city_id'], $with = null)->name,
                'city_id' => $request['city_id'],
                'district' => \Indonesia::findDistrict($request['district_id'], $with = null)->name,
                'district_id' => $request['district_id'],
                'village' => \Indonesia::findVillage($request['village_id'], $with = null)->name,
                'village_id' => $request['village_id'],
                'rt' => $request['rt'],
                'rw' => $request['rw'],
                'latitude' => $request['latitude'],
                'longitude' => $request['longitude'],
                'address_detail' => $request['alamat_lengkap']
            ]);

            if($resident) {
                return Inertia::render('Handler/Succes/Congrat', [
                    'success'       => 'Berhasil menambahkan penduduk'
                ]);
            } else {
                return Inertia::render('Handler/Error/Failed', [
                    'failed'        => 'Gagal menambahkan penduduk'
                ]);
            }

            DB::commit();
        } catch (\Throwable $th) {
            return Inertia::render('Handler/Error/Error', [
                'error'             => 'Internal Server Error'
            ]);
        }
    }


    public function destroy($id) {
        try {
            $query = "DELETE FROM residents WHERE id = ?";
        $delete = DB::delete($query, [$id]);
        if($delete) {
            return Inertia::render('Handler/Success/Congrat', [
                'success'       => 'Berhasil menghapus penduduk'
            ]);
        } else {
            return Inertia::render('Handler/Error/Failed', [
                'failed'        => 'Gagal menghapus penduduk'
            ]);
        }
        } catch (\Throwable $th) {
            return Inertia::render('Handler/Error/Error', [
                'errors'        => $th->getMessage()
            ]);
        }

    }
}
