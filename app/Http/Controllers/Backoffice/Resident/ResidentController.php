<?php

namespace App\Http\Controllers\Backoffice\Resident;

use Inertia\Inertia;
use App\Models\Address;
use App\Models\Resident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ResidentController extends Controller
{
    public function index() {
        try
        {
            $query = Resident::query();
            if (request('search')) {
                $query->where('name', 'LIKE', '%'.request('search').'%');
            }
            $data = DB::table('residents')->orderBy('name', 'asc')->paginate(12);
            return Inertia::render('Resident/Index', [
                'residents'          => $data
            ]);
        } catch(\Throwable $th) {
            return Inertia::render('Resident/Index', [
                'errors'        => $th->getMessage()
            ]);
        }
    }


    public function create() {
        try {
            return Inertia::render('Resident/Create');
        } catch(\Throwable $th) {
            return redirect()->route('letter')->with([
                'errors'    => $th->getMessage()
            ]);
        }
    }


    public function store(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'nik'                  => ['required', 'integer'],
                'no_kk'                => ['required', 'integer'],
                'name'                 => ['required', 'string'],
                'date_place_birth'     => ['required'],
                'gender'               => ['required'],
                'religion'             => ['nullable'],
                'marital_status'       => ['required'],
                'job'                  => ['required'],
                'citizenship'          => ['required'],
                'valid_until'          => ['required'],
                'province'             => ['required', 'string',],
                'city'                 => ['required', 'string', ],
                'district'             => ['required', 'string', ],
                'village'              => ['required', 'string', ],
                'RT'                   => ['required', 'string', 'max:6'],
                'RW'                   => ['required', 'string', 'max:6'],
                'blood_type'           => ['required']
            ]);

            if($validator->fails()) {
                return Inertia::render('Resident/Create', [
                    'error_validation'        => $validator->errors()
                ]);
            }

            $nik = $request->nik;
            $no_kk = $request->no_kk;
            $nama = $request->name;
            $ttl = $request->date_place_birth;
            $gender = $request->gender;
            $agama = $request->religion;
            $status = $request->marital_status;
            $job = $request->job;
            $citizenship = $request->citizenship;
            $valid = $request->valid_until;
            $province = $request->province;
            $city = $request->city;
            $village = $request->village;
            $district = $request->district;
            $rt = $request->RT;
            $rw = $request->RW;
            $goldar = $request->blood_type;

            $resident = Resident::create([
                'NIK'                       => $nik,
                'KK_code'                   => $no_kk,
                'name'                      => $nama,
                'date_place_birth'          => $ttl,
                'gender'                    => $gender,
                'religion'                  => $agama,
                'marital_status'            => $status,
                'job'                       => $job,
                'citizenship'               => $citizenship,
                'valid_until'               => $valid,
                'blood_type'                => $goldar
            ]);

            $query_id = "SELECT id FROM residents WHERE NIK = ?";
            $r_id = DB::select($query_id, [$nik]);

            Address::create([
                'resident_id'  => $r_id[0]->id,
                'province' => $province,
                'city' => $city,
                'district' => $district,
                'village' => $village,
                'RT' => $rt,
                'RW' => $rw
            ]);

            if($resident) {
                return redirect()->route('penduduk.index')->with([
                    'success'       => 'GG'
                ]);
            } else {
                return Inertia::render('Resident/Create', [
                    'errors'        => 'Gagal menambahkan data penduduk !'
                ]);
            }
        } catch (\Throwable $th) {
            return Inertia::render('Resident/Create', [
                'errors'        => $th->getMessage()
            ]);
        }

    }



    public function update(Request $request) {
        DB::transaction();
        try {
            $validator = Validator::make($request->all(), [
                'nik'                  => ['nullable', 'integer'],
                'no_kk'                => ['nullable', 'integer'],
                'name'                 => ['nullable', 'string'],
                'date_place_birth'     => ['nullable'],
                'gender'               => ['nullable'],
                'religion'             => ['nullable'],
                'marital_status'       => ['nullable'],
                'job'                  => ['nullable'],
                'citizenship'          => ['nullable'],
                'valid_untill'         => ['nullable'],
                'province'             => ['nullable', 'string',],
                'city'                 => ['nullable', 'string', ],
                'district'             => ['nullable', 'string', ],
                'village'              => ['nullable', 'string', ],
                'RT'                   => ['nullable', 'string', 'max:6'],
                'RW'                   => ['nullable', 'string', 'max:6'],
                'address_detail'       => ['nullalbe', 'string'],
            ]);

            if($validator->fails()) {
                return redirect()->route('letter')->with([
                    'fails'     => $validator->errors()
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
       $delete = Resident::where('id', $id)->delete();
        if($delete) {
            return redirect()->route('resident')->with([
                'success'    => 'Berhasil menghapus penduduk'
            ]);
        } else {
            return redirect()->route('resident')->with([
                'failed'    => 'Gagal menghapus penduduk'
            ]);
        }
        } catch (\Throwable $th) {
            return redirect()->route('resident')->with([
                'errors'    => $th->getMessage()
            ]);
        }

    }
}
