import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Banner from '@/Components/Banner';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavLink from '@/Components/NavLink';
import { TbLayoutDashboard, TbUsers, TbFileDescription, TbSettings } from "react-icons/tb"
import { InertiaLink } from '@inertiajs/inertia-react';
import ApplicationMark from '@/Components/ApplicationMark';
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
  const data = useTypedPage().props;
  console.log(data);


  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }

  return (
    <div>
      <Head title={title} />
      <Banner />
      <div className="flex min-h-screen">
      <div className='transition-all lg:relative duration-500 relative ease-in-out min-h-screen p-10 bg-mainblue text-putih rounded-[10px] ml-[10px] mt-5'>
        <div className="flex justify-center w-[100px]">
        <ApplicationMark/>
         <InertiaLink href={route('dashboard')}>
        <h1 className='text-center font-bold pl-[5px] pt-2'>Desa Bunijaya</h1>
        </InertiaLink>
        </div>
        <div className='flex flex-col mt-5'>
            <ButtonGroup display='flex' flexDirection={'column'} gap='2'>
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
      </div>
        <section className='ml-4 overflow-hidden'>
        {renderHeader ? (
          <header className='pt-10'>
              {renderHeader()}
          </header>
        ) : null}
            {children}
            </section>
      </div>
    </div>
  );
}
