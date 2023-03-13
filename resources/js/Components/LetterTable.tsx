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
  import { TbTrash, TbEye } from 'react-icons/tb'
  import { Inertia } from '@inertiajs/inertia'
  import useRoute from '@/Hooks/useRoute'
  import { InertiaLink } from '@inertiajs/inertia-react'



const LetterTables = ({ data }) => {
    const route = useRoute()
    // delete resident
    const showLetter = async (id) => {
        Inertia.get(`/surat/${ id }`)
    }

    const deleteLetter = async (id) => {
        Inertia.delete(`/surat/${ id }`)
    }
    return(
        <>
    <TableContainer>
  <Table className="text-center mx-1 mr-[60px]" variant='striped' >
    <Thead>
      <Tr>
        <Th>No Surat</Th>
        <Th>NIK Tujuan</Th>
        <Th>Tujuan Dibuat</Th>
        <Th>Dibuat PADA</Th>
        <Th>Opsi</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data?.map((surat, index) => (
               <tr key={index}>
               <td>{ surat.no_surat }</td>
               <td>{ surat.NIK }</td>
               <td>{ surat.objective }</td>
               <td>{ surat.created_at }</td>
               <td>
                <Button onClick={() => showLetter(surat.id)} className='mx-3' colorScheme='alpha' >
                <TbEye style={{ color: '#0029BB' }} />
                </Button>
                <Button onClick={() => deleteLetter(surat.id)} className='mx-3' colorScheme='alpha' >
                <TbTrash style={{ color: 'red' }} />
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
