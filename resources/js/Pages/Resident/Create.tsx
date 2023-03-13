import React, { useState } from "react"
import {
    Stack,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Input,
    Radio,
    RadioGroup,
    Select,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Fade,
    useToast
 } from '@chakra-ui/react'
 import { Inertia } from "@inertiajs/inertia"
 import AppLayout from "@/Layouts/AppLayout"

export default function Store(props) {
   const errors = props.error_validation
   const [nik, setNik] = useState('')
   const [no_kk, setNoKK] = useState('')
   const [name, setName] = useState('')
   const [ttl, setTtl] = useState('')
   const [gender, setGender] = useState('')
   const [status, setStatus] = useState('')
   const [religion, setReligion] = useState('')
   const [job, setJob] = useState('')
   const [citizenship, setCitizenship] = useState('')
   const [valid, setValid] = useState('')
   const [province, setProvince] = useState('')
   const [city, setCity] = useState('')
   const [district, setDistrict] = useState('')
   const [village, setVillage] = useState('')
   const [goldar, setGoldar] = useState('')
   const [RT, setRT] = useState('')
   const [RW, setRW] = useState('')
   const [kampung, setKampung] = useState('')

   console.log(errors)

   const storeResident = async (e) => {
    e.preventDefault();

    Inertia.post('/penduduk', {
        nik: nik,
        no_kk :no_kk,
        name: name,
        date_place_birth: ttl,
        gender: gender,
        religion: religion,
        marital_status: status,
        job: job,
        citizenship: citizenship,
        valid_until: valid,
        province: province,
        city: city,
        district: district,
        village: village,
        kampung: kampung,
        RT: RT,
        RW: RW,
        blood_type: goldar,
    });
   }
    return(
        <>
           <AppLayout
      title="Tambah Penduduk"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
          Tambah Penduduk ...
        </h2>
      )}
    >
        <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px]">
            <h3 className='text-[25px]'>Harap pastikan data yang dimasukan sudah benar dan sesuai.</h3>
          </div>
          {errors && (
            <Fade in={errors} animateOpacity>
               <Alert className="rounded-md my-5" status='error'>
               <AlertIcon />
               <AlertTitle>Gagal menambahkan data penduduk</AlertTitle>
               <AlertDescription>
                <p>Harap pastikan semua terisi dengan benar.</p>
              </AlertDescription>
             </Alert>
             </Fade>
          )}
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
        <div className='total-residents w-[1000px] bg-abu rounded-[25px]'>
        <div className='inline '>


        <form className="m-[15px]" onSubmit={storeResident}>
      <label>NIK:</label>
      <NumberInput  value={nik} onChange={(e) => setNik(e)} >
  <NumberInputField  />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
      <label>No KK :</label>
      <NumberInput  onChange={(e) => setNoKK(e)}>
  <NumberInputField value={no_kk} />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
<label>Nama:</label>
      <Input value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Tempat Tanggal Lahir:</label>
      <Input value={ttl} onChange={(e) => setTtl(e.target.value)}/>
      <label>Jenis Kelamin:</label>
      <RadioGroup defaultValue='1'>
  <Stack onChange={(e) => setGender(e.target.value)} value={gender} spacing={5} direction='row'>
    <Radio colorScheme='blue' value='laki-laki' >
      Laki-laki
    </Radio>
    <Radio colorScheme='blue' value='perempuan' onChange={(e) => setGender(e.target.value)}>
      Perempuan
    </Radio>
  </Stack>
</RadioGroup>
      <label>Status:</label>
      <Select defaultValue='Belum Kawin' value={status} onChange={(e) => setStatus(e.target.value)}>
        <option >Belum Kawin</option>
        <option >Kawin</option>
        <option >Cerai Hidup</option>
        <option >Cerai Mati</option>
        </Select>
      <label>Agama :</label>
      <Select defaultValue='Islam' value={religion} onChange={(e) => setReligion(e.target.value)}>
        <option >Islam</option>
        <option >Kristen</option>
        <option >Katholik</option>
        <option >Hindu</option>
        <option >Budha</option>
        <option >Konghucu</option>
        </Select>
      <label>Pekerjaan</label>
   <Input value={job} onChange={(e) => setJob(e.target.value)}/>
      <label>Kewarganegaraan</label>
   <Input value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
      <label>Berlaku Sampai</label>
   <Input value={valid} onChange={(e) => setValid(e.target.value)}/>
      <label>Provinsi</label>
   <Input value={province} onChange={(e) => setProvince(e.target.value)}/>
      <label>Kota / Kabupaten</label>
   <Input value={city} onChange={(e) => setCity(e.target.value)}/>
      <label>Kecamatan</label>
   <Input value={district} onChange={(e) => setDistrict(e.target.value)}/>
      <label>Desa / Kelurahan</label>
   <Input value={village} onChange={(e) => setVillage(e.target.value)}/>
   <label>Kampung</label>
   <Input value={kampung} onChange={(e) => setKampung(e.target.value)}/>
      <label>RT</label>
   <Input value={RT} onChange={(e) => setRT(e.target.value)}/>
      <label>RW</label>
   <Input value={RW} onChange={(e) => setRW(e.target.value)}/>
      <label>Golongan Darah</label>
   <Input value={goldar} onChange={(e) => setGoldar(e.target.value)}/>
          <Button type="submit" className="bg-mainblue m-[15px]" colorScheme='alpha' variant='solid'>
            Simpan
            </Button>
            </form>
        </div>
        </div>
          </div>
        </div>
      </div>

            </AppLayout>
        </>
    )
}
