import React, {useState} from "react"
import AppLayout from "@/Layouts/AppLayout"
import { TbSearch, TbFriends } from "react-icons/tb"
import { Input, Button, InputLeftElement, InputGroup } from '@chakra-ui/react'
import Tables from "@/Components/DataTable"
import Paginator from "@/Components/Paginator"
import { InertiaLink } from "@inertiajs/inertia-react"
import useRoute from "@/Hooks/useRoute"
import { Inertia } from "@inertiajs/inertia"


export default function Resident(props) {
    function getParameterByName(name: string) {
        const uri = window.location.search
        const match = RegExp('[?&]' + name + '=([^&]*)').exec(uri)
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
    }

    const route = useRoute()
    const search = getParameterByName('search') || '';

    const handleSearch = (query: string) => {
         Inertia.get('/penduduk', { search : query }, { preserveState: true });
    }
    return(
        <>
        <AppLayout
      title="Penduduk"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
          Data Penduduk
        </h2>
      )}
    >
        <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px] justify-between">
            <h3 className='text-[25px]'>List Penduduk Desa Bunijaya .</h3>
            <div className="flex mt-[10px] justify-between">
          <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<TbSearch color='gray.300' />}
            />
            <Input name="query"
     onChange={(e) => handleSearch(e.target.value)}
     value={search} type='tel' placeholder='Cari ...'
      />
        </InputGroup>
        <InertiaLink href={route('penduduk.create')}>
        <Button leftIcon={<TbFriends />} colorScheme="alpha" className="bg-mainblue ml-[20px]">Tambah Penduduk</Button>
        </InertiaLink>
        </div>
          </div>
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
        <div className='total-residents bg-abu rounded-[25px]'>
        <div className='inline'>
        <Tables residents={props.residents.data} />
        <div className="flex p-[20px]">
        <Paginator meta={props.residents} />
        </div>
        </div>
        </div>
          </div>
        </div>
      </div>
    </AppLayout>
        </>
    )
}
