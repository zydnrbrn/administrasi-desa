import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import useTypedPage from "@/Hooks/useTypedPage"
import { TbSearch, TbTrash } from "react-icons/tb"
import { Button } from '@chakra-ui/react'
import { Input, Stack, InputLeftElement, InputGroup } from '@chakra-ui/react'

export default function Resident() {
    const data = useTypedPage().props.data;
    console.log(data)
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
          <div className="greeting ml-[20px]">
            <h3 className='text-[25px]'>List Penduduk Desa Bunijaya .</h3>
          </div>
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
          <Stack className="mb-[50px]" spacing={3}>
          <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<TbSearch color='gray.300' />}
            />
            <Input type='tel' placeholder='Cari ...' />
        </InputGroup>
        </Stack>
        <div className='total-residents w-[900px] bg-abu rounded-[25px]'>
        <div className='inline'>
        <TableContainer>
  <Table className="text-center" variant='striped' colorScheme='teal'>
    <TableCaption>Data berdasarkan yang di input oleh admin.</TableCaption>
    <Thead>
      <Tr>
        <Th>NIK</Th>
        <Th>NO. KK</Th>
        <Th>Nama</Th>
        <Th>Tempat Tangal Lahir</Th>
        <Th>Jenis Kelamin</Th>
        <Th>Status</Th>
        <Th>religion</Th>
        <Th>kewarganegaraan</Th>
        <Th>Berlaku sampai</Th>
        <Th>Opsi</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data?.map((penduduk) => (
               <tr>
               <td>{ penduduk.NIK }</td>
               <td>{ penduduk.KK_code }</td>
               <td>{ penduduk.name }</td>
               <td>{ penduduk.date_place_birth }</td>
               <td>{ penduduk.gender }</td>
               <td>{ penduduk.marital_status }</td>
               <td>{ penduduk.religion }</td>
               <td>{ penduduk.citizenship }</td>
               <td>{ penduduk.valid_until }</td>
               <td>
               <Button leftIcon={<TbTrash />} colorScheme='red' variant='solid'>
                    Email
                </Button>
                <Button rightIcon={<TbTrash />} colorScheme='red' variant='solid'>
                    Call us
                </Button>
               </td>
           </tr>
        ))}
    </Tbody>
  </Table>
</TableContainer>

        </div>
        </div>
          </div>
        </div>
      </div>
    </AppLayout>
        </>
    )
}
