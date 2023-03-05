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
    Textarea
 } from '@chakra-ui/react'
 import { Inertia } from "@inertiajs/inertia"
 import AppLayout from "@/Layouts/AppLayout"

export default function Store() {
   const [nosurat, setNomor] = useState('')
   const [name, setName] = useState('')
   const [nik, setNik] = useState('')
   const [ttl, setTtl] = useState('')
   const [gender, setGender] = useState('')
   const [address, setAddress] = useState('')
   const [status, setStatus] = useState('')
   const [keterangan, setKeterangan] = useState('')
   const [digunakan, setDigunakan] = useState('')

   const storeSktm = async (e) => {
    e.preventDefault();

    Inertia.post('store-sktm', {
        no_surat: nosurat,
        name: name,
        nil: nik,
        ttl: ttl,
        gender: gender,
        address: address,
        status: status,
        keterangan: keterangan,
        digunakan: digunakan
    });
   }
    return(
        <>
           <AppLayout
      title="Buat Skk"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
          Buat Surat Keterangan Kematian
        </h2>
      )}
    >
        <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px]">
            <h3 className='text-[25px]'>Harap pastikan data yang dimasukan sudah benar dan sesuai, dikarenakan surat yang sudah dibuat tidak bisa diubah.</h3>
          </div>
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
        <div className='total-residents w-[1000px] bg-abu rounded-[25px]'>
        <div className='inline '>


        <form className="m-[15px]" onSubmit={storeSktm}>
      <label>Nomor Surat:</label>
      <NumberInput value={nosurat} onChange={(e) => setNomor(e.target.value)} >
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
      <label>Nama:</label>
      <Input value={name} onChange={(e) => setName(e.target.value)}/>
      <label>NIK:</label>
      <NumberInput value={nik} onChange={(e) => setNik(e.target.value)}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
      <label>Tempat Tanggal Lahir:</label>
      <Input value={ttl} onChange={(e) => setTtl(e.target.value)}/>
      <label>Jenis Kelamin:</label>
      <RadioGroup defaultValue='1'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='blue' value={gender} onChange={(e) => setGender(e.target.value)}>
      Laki-laki
    </Radio>
    <Radio colorScheme='blue' value={gender} onChange={(e) => setGender(e.target.value)}>
      Perempuan
    </Radio>
  </Stack>
</RadioGroup>
      <label>Alamat:</label>
      <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      <label>Status:</label>
      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option >Belum Kawin</option>
        <option >Kawin</option>
        <option >Cerai Hidup</option>
        <option >Cerai Mati</option>
        </Select>
      <label>Keterangan:</label>
     <Textarea value={keterangan} onChange={(e) => setKeterangan(e.target.value)}/>
      <label>Digunakan Untuk:</label>
   <Textarea value={digunakan} onChange={(e) => setDigunakan(e.target.value)}/>
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
