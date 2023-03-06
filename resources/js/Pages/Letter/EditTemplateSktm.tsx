import React, { useState } from "react"
import {
    Button,
    Textarea
 } from '@chakra-ui/react'
 import { Inertia } from "@inertiajs/inertia"
 import AppLayout from "@/Layouts/AppLayout"

export default function Store() {
   const [name, setName] = useState('')
   const [title, setTitle] = useState('')
   const [header, setHeader] = useState('')
   const [content, setContent] = useState('')
   const [footer, setFooter] = useState('')

   const storeSktm = async (e) => {
    e.preventDefault();

    Inertia.post('/create-template-sktm', {
        name: name,
        title: title,
        header: header,
        content: content,
        footer: footer
    });
   }
    return(
        <>
           <AppLayout
      title="Edit Template Sktm"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
          Edit Template Surat Keterangan Tidak Mampu
        </h2>
      )}
    >
        <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px]">
            <h3 className='text-[25px]'>Template ini merupakan isi yang akan ditampilkan pada halaman surat.</h3>
          </div>
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
        <div className='total-residents w-auto bg-abu rounded-[25px]'>
        <div className='inline '>
        <form className="m-[15px]" onSubmit={storeSktm}>
      <label>Nama</label>
      <Textarea value={name} onChange={(e) => setName(e.target.value)} />
      <label>Judul</label>
     <Textarea value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Pembuka Surat</label>
   <Textarea value={header} onChange={(e) => setHeader(e.target.value)} />
      <label>Isi Surat</label>
   <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <label>Penutup</label>
   <Textarea value={footer} onChange={(e) => setFooter(e.target.value)} />
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
