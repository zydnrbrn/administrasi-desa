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

export default function Resident() {
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
        <div className='total-residents w-[1250px] bg-abu rounded-[25px] h-[100px]'>
        <div className='inline '>

        </div>
        </div>
          </div>
        </div>
      </div>
    </AppLayout>
        </>
    )
}
