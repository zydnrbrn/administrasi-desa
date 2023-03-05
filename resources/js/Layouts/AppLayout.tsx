import { Inertia } from '@inertiajs/inertia'
import { Head } from '@inertiajs/inertia-react'
import React, { PropsWithChildren, useState } from 'react'
import useRoute from '@/Hooks/useRoute'
import useTypedPage from '@/Hooks/useTypedPage'
import Banner from '@/Components/Banner'
import {
    Button,
    ButtonGroup,
    IconButton,
    Box,
 } from '@chakra-ui/react'
import NavLink from '@/Components/NavLink'
import {
    TbLayoutDashboard,
    TbUsers,
    TbFileDescription,
    TbSettings,
    TbDoorEnter } from "react-icons/tb"
import { FaAlignLeft } from "react-icons/fa"
import { InertiaLink } from '@inertiajs/inertia-react'
import ApplicationMark from '@/Components/ApplicationMark'

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {

  const route = useRoute();
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar= () => {
    setOpen(!isOpen);
  }


  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }

  return (
    <div>
      <Head title={title} />
      <Banner />
      <div className="flex min-h-screen">
      <Box className={`transition duration-500 ease-in-out min-h-screen p-10 bg-mainblue text-putih rounded-[10px] ml-[10px] my-5 ${isOpen ? 'absolute left-[-500px] [&>*]:delay-500 [&>*]:duration-500 z-10 ' : ' transition-all ease-in-out duration-200' }`} >
        <div className="flex justify-center ml-[10px]">
        <ApplicationMark/>
         <InertiaLink href={route('dashboard')}>
        <h1 className='text-center text-[25px] font-bold pl-[5px] pt-5 ml-1'>Desa Bunijaya</h1>
        </InertiaLink>
        </div>
        <div className='flex flex-col mt-10'>
            <ButtonGroup display='flex' flexDirection={'column'} gap='1'>
            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
            <Button colorScheme='Alpha' ><TbLayoutDashboard className='w-[40px] h-[40px] pr-[10px]'/><h1 className='font-bold'>Dashboard</h1></Button>
            </NavLink>
            <NavLink href={route('letter')} active={route().current('letter')}>
            <Button colorScheme='Alpha' ><TbFileDescription className='w-[40px] h-[40px] pr-[10px]'/><h1 className='font-bold'>Surat Menyurat</h1></Button>
            </NavLink>
            <NavLink href={route('resident')} active={route().current('resident')}>
            <Button colorScheme='Alpha' ><TbUsers className='w-[40px] h-[40px] pr-[10px]'/><h1 className='font-bold'>Data Penduduk</h1></Button>
            </NavLink>
            <NavLink href={route('profile.show')} active={route().current('profile.show')}>
            <Button colorScheme='Alpha' ><TbSettings className='w-[40px] h-[40px] pr-[10px]'/><h1 className='font-bold'>Pengaturan</h1></Button>
            </NavLink>
            </ButtonGroup>
        </div>
        <div className="absolute bottom-10 flex-none">
        <form onSubmit={logout}>
            <Button className='w-[200px] transition duration-500 ease-in-out rounded-[10px] font-medium hover:bg-putih/30' type='submit' colorScheme='Alpha' ><TbDoorEnter className='w-[40px] h-[40px] pr-[10px]'/><h1 className='font-bold'>Logout</h1></Button>
        </form>
        </div>
      </Box>
        <section className='ml-4 overflow-hidden'>
        {renderHeader ? (
          <header className='pt-10'>
            <div className="flex flex-column">
           <IconButton onClick={toggleSidebar} color={'#0038FF'} className='mx-5 w-[40px] h-[40px]' aria-label="close sidebar" colorScheme='alpha' icon={ <FaAlignLeft className='w-[40px] h-[40px]' />} />
              {renderHeader()}
              </div>
          </header>
        ) : null}
            {children}
            </section>
      </div>
    </div>
  );
}
