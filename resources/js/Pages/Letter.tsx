import React, { useState, Fragment } from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Button } from '@chakra-ui/react'
import { TbFileDescription } from "react-icons/tb"
import { Dialog, Transition } from '@headlessui/react'

export default function Letter() {
    const [isOpen, setOpen] = useState(true);
    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }
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
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

            <Tabs variant='soft-rounded' colorScheme='teal'>
                <TabList>
                    <Tab><h2>Buat Surat</h2></Tab>
                    <Tab>Jurnal Surat</Tab>
                </TabList>
                        <TabPanels>
                            <TabPanel>
                            <div className="content-tabs">
                            <Stack className="" direction='row' spacing={4}>
                                <Button onClick={openModal} className="bg-mainblue" leftIcon={<TbFileDescription />} colorScheme='alpha' variant='solid'>
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
