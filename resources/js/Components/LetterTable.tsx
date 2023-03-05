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
  import { TbTrash } from 'react-icons/tb'
  import { Inertia } from '@inertiajs/inertia'

const LetterTables = ({ data }) => {
    // delete resident
    // const deleteResident = async (id) => {
    //     Inertia.delete(`/penduduk/${ id }`)
    // }
    return(
        <>
    <TableContainer>
  <Table className="text-center mx-1 mr-[60px]" variant='striped' >
    <Thead>
      <Tr>
        <Th>No Surat</Th>
        <Th>NIK Tujuan</Th>
        <Th>Judul</Th>
        <Th>Dibuat PADA</Th>
        <Th>Hapus</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data?.map((surat, index) => (
               <tr key={index}>
               <td>{ surat.no_surat }</td>
               <td>{ surat.NIK }</td>
               <td>{ surat.title }</td>
               <td>{ surat.created_at }</td>
               <td>
                <Button  className='mx-3' leftIcon={<TbTrash />} colorScheme='red' variant='solid'>
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


export default LetterTables
