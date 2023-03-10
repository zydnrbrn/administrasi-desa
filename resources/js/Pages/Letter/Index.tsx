import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Stack,
    Button, } from '@chakra-ui/react'
import { TbFileDescription } from "react-icons/tb"
import { InertiaLink } from '@inertiajs/inertia-react'
import LetterTables from "@/Components/LetterTable"
import Paginator from "@/Components/Paginator"

export default function Letter(props) {
    return(
        <>
        <AppLayout
      title="Surat"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
          Surat Menyurat
        </h2>
      )}
    >
    <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px]">
            <h3 className='text-[25px]'>Buat atau kelola surat disini .</h3>
          </div>
          <div className='content gap-[20px] ml-[20px] mt-[40px]'>
        <div className='total-residents bg-abu rounded-[25px]'>
        <div className='inline '>
            <Tabs variant='soft-rounded' colorScheme='teal'>
                <TabList>
                    <Tab><h2>Jurnal Surat</h2></Tab>
                    <Tab><h2>Buat Surat</h2></Tab>
                </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="sktm">
                            <LetterTables data={props.surat.data} />
                            <div className="flex p-[20px]">
                            <Paginator meta={props.surat} />
                            </div>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="content-tabs">
                            <Stack className="" direction='row' spacing={4}>
                                <InertiaLink href={route('surat.create')}>
                                <Button className="bg-mainblue w-[120px]" leftIcon={<TbFileDescription />} colorScheme='alpha' variant='solid'>
                                    SKTM
                                </Button>
                                </InertiaLink>
                            </Stack>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                        </TabPanels>
              </Tabs>
        </div>
        </div>
          </div>
        </div>
      </div>
    </AppLayout>
        </>
    )
}
