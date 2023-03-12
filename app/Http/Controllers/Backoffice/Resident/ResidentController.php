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
            $data = DB::table('residents')->orderBy('name', 'asc')->paginate(10);
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
            DB::beginTransaction();
            $validator = Validator::make($request->all(), [
                'nik'                  => ['required', 'integer', 'unique:residents,NIK'],
                'no_kk'                => ['required', 'integer', 'unique:residents,name'],
                'name'                 => ['required', 'string'],
                'date_place_birth'     => ['required'],
                'gender'               => ['required'],
                'religion'             => ['required'],
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

            DB::commit();

            if($resident) {
                return redirect()->route('penduduk.index')->with([
                    'success'       => 'Berhasil menambahkan data penduduk !'
                ]);
            } else {
                return redirect()->route('penduduk.index')->with([
                    'failed'       => 'Gagal menambahkan data penduduk !'
                ]);
            }
        } catch (\Throwable $th) {
            Db::rollBack();
            return Inertia::render('Resident/Create', [
                'errors'        => $th->getMessage()
            ]);
        }

    }


    public function Edit($penduduk) {
        $query = "SELECT * FROM residents r LEFT JOIN address a ON a.resident_id = r.id WHERE r.id = ?";
        $data = DB::select($query, [$penduduk]);
        return Inertia::render('Resident/Edit', [
            'resident'  => $data[0]
        ]);
    }



    public function update(Request $request, $penduduk) {
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'nik'                  => ['nullable', 'integer', 'unique:residents,NIK'],
                'no_kk'                => ['nullable', 'integer'],
                'name'                 => ['nullable', 'string', 'unique:residents,name'],
                'date_place_birth'     => ['nullable'],
                'gender'               => ['nullable'],
                'religion'             => ['nullable'],
                'marital_status'       => ['nullable'],
                'job'                  => ['nullable'],
                'citizenship'          => ['nullable'],
                'valid_until'          => ['nullable'],
                'province'             => ['nullable', 'string',],
                'city'                 => ['nullable', 'string', ],
                'district'             => ['nullable', 'string', ],
                'village'              => ['nullable', 'string', ],
                'RT'                   => ['nullable', 'string', 'max:6'],
                'RW'                   => ['nullable', 'string', 'max:6'],
                'blood_type'           => ['nullable']
            ]);

            if($validator->fails()) {
                return redirect()->route('letter')->with([
                    'fails'     => $validator->errors()
                ]);
            }

            $r_id = $penduduk;
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

            $resident = Resident::find($r_id);
            $resident->update([
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
                'blood_type'                => $goldar,
                'valid_until'               => $valid
            ]);

            Address::where('resident_id', $penduduk)->update([
                'province' => $province,
                'city' => $city,
                'district' => $district,
                'village' => $village,
                'RT' => $rt,
                'RW' => $rw
            ]);

            if($resident) {
                return redirect()->route('penduduk.index')->with([
                    'success'       => 'Berhasil menambahkan data penduduk !'
                ]);
            } else {
                return redirect()->route('penduduk.index')->with([
                    'failed'        => 'Gagal menambahkan data penduduk !'
                ]);
            }

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return Inertia::render('Resident/Edit', [
                'errors'    => $th->getMessage()
            ]);
        }
    }


    public function destroy(Resident $penduduk) {
        try {
       $penduduk->delete();
        if($penduduk) {
            return redirect()->route('penduduk.index')->with([
                'residents'    => 'Berhasil menghapus penduduk !'
            ]);
        } else {
            return redirect()->route('penduduk.index')->with([
                'residents'    => 'Gagal menghapus penduduk !'
            ]);
        }
        } catch (\Throwable $th) {
            return redirect()->route('penduduk.index')->with([
                'errors'    => $th->getMessage()
            ]);
        }

    }
}
