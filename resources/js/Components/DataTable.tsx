import React, { Fragment, useState } from 'react'
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { TbTrash, TbEdit } from 'react-icons/tb'
  import { Inertia } from '@inertiajs/inertia'
  import { InertiaLink } from '@inertiajs/inertia-react'

const Tables = ({ residents }) => {
    console.log(residents)
    let [isOpen, setOpen] = useState(false)
    function closeModal()  {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }
    // delete resident
    const deleteResident = async (id) => {
        Inertia.delete(`penduduk/${id}`)
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
                <InertiaLink href={`/penduduk/${penduduk.id}/edit`}>
                <Button className='bg-mainblue' leftIcon={<TbEdit />} colorScheme='alpha' variant='solid'>
                    Edit
                </Button>
                </InertiaLink>
                <Button onClick={openModal} className='mx-3' leftIcon={<TbTrash />} colorScheme='red' variant='solid'>
                    Hapus
                </Button>
                <Modal
              isOpen={isOpen}
              onClose={closeModal}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Yakin menghapus data penduduk ?</ModalHeader>
                <ModalCloseButton />
                <ModalFooter>
                       <Button onClick={() => deleteResident(penduduk.id)} className='mx-3' leftIcon={<TbTrash />} colorScheme='red' variant='solid'>
                          Hapus
                      </Button>
                  <Button onClick={closeModal}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
               </td>
           </tr>
        ))}
    </Tbody>
  </Table>
</TableContainer>
<div>
                <>

            </>
            </div>
        </>
    )
}


export default Tables
