import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Button } from '@chakra-ui/react'
import {
    TbFileDescription } from "react-icons/tb"

export default function Letter() {
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
        <div className='total-residents w-[1250px] bg-abu rounded-[25px]'>
        <div className='inline '>
            <Tabs variant='soft-rounded' colorScheme='teal'>
                <TabList>
                    <Tab><h2>Buat Surat</h2></Tab>
                    <Tab>Jurnal Surat</Tab>
                </TabList>
                        <TabPanels>
                            <TabPanel>
                            <div className="content-tabs">
                            <Stack className="" direction='row' spacing={4}>
                                <Button className="bg-mainblue" leftIcon={<TbFileDescription />} colorScheme='alpha' variant='solid'>
                                    SKTM
                                </Button>
                                <Button className="bg-mainblue" leftIcon={<TbFileDescription />} colorScheme='alpha' variant='solid'>
                                    Email
                                </Button>
                            </Stack>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, tenetur aliquid, illum itaque beatae praesentium temporibus eveniet non tempora earum accusantium natus vero voluptatum aut nihil, obcaecati aliquam? Eaque cumque accusantium maxime vel eveniet commodi laudantium voluptatum esse repellat recusandae. Modi provident tempore similique. Necessitatibus ea temporibus ut facere inventore eligendi in qui vitae aliquam repudiandae? Ipsum, delectus hic numquam eligendi nisi sapiente aliquam at minus enim doloribus. Laudantium perspiciatis nesciunt soluta qui molestiae perferendis dignissimos ducimus nemo nihil. Impedit incidunt excepturi, sapiente iste eaque ipsam nam quam placeat nostrum quo mollitia est totam pariatur omnis? Saepe provident sit aut ullam nam harum iure eaque consequuntur repudiandae, hic commodi dolorem ea aspernatur, recusandae corrupti sequi, tempora ut architecto consectetur odit unde! Deleniti, natus autem eius enim delectus porro. Nostrum, esse. Consequuntur non nesciunt quo temporibus nemo beatae sed atque nulla cumque ea voluptatibus praesentium, illo officiis amet voluptas consequatur ratione eius, quia repudiandae fuga aut dolore cupiditate magnam! Sint reiciendis doloremque dignissimos, omnis aliquam debitis eum doloribus dolor. Labore mollitia eius voluptate ab eum quisquam, soluta, hic delectus beatae suscipit eligendi repellendus provident quasi tempore? Nam quo error est, facilis eum provident ipsa unde sed deserunt optio magni aut accusamus!</p>
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
