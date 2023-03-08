import React from 'react'
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'
  import { TbTrash, TbEdit } from 'react-icons/tb'
  import { Inertia } from '@inertiajs/inertia'

const Tables = ({ residents }) => {
    // delete resident
    const deleteResident = async (id) => {
        Inertia.delete(`/penduduk/${ id }`)
    }
    return(
        <>
    <TableContainer>
  <Table className="mx-1 mr-[60px]" variant='striped' >
    <Thead>
      <Tr className='text-center'>
        <Th>NIK</Th>
        <Th>NO. KK</Th>
        <Th>Nama</Th>
        <Th>Tempat Tangal Lahir</Th>
        <Th>Jenis Kelamin</Th>
        <Th>Status</Th>
        <Th>Golongan Darah</Th>
        <Th>religion</Th>
        <Th>kewarganegaraan</Th>
        <Th>Berlaku sampai</Th>
        <Th>Opsi</Th>
      </Tr>
    </Thead>
    <Tbody className='text-center'>
    {residents?.map((penduduk, index) => (
               <tr key={index}>
               <td>{ penduduk.NIK }</td>
               <td>{ penduduk.KK_code }</td>
               <td>{ penduduk.name }</td>
               <td>{ penduduk.date_place_birth }</td>
               <td>{ penduduk.gender }</td>
               <td>{ penduduk.marital_status }</td>
               <td>{ penduduk.blood_type }</td>
               <td>{ penduduk.religion }</td>
               <td>{ penduduk.citizenship }</td>
               <td>{ penduduk.valid_until }</td>
               <td>
                <Button className='bg-mainblue' leftIcon={<TbEdit />} colorScheme='alpha' variant='solid'>
                    Edit
                </Button>
                <Button onClick={() => deleteResident(residents.id)} className='mx-3' leftIcon={<TbTrash />} colorScheme='red' variant='solid'>
                    Hapus
                </Button>
               </td>
           </tr>
        ))}
    </Tbody>
  </Table>
</TableContainer>
        </>
    )
}


export default Tables
