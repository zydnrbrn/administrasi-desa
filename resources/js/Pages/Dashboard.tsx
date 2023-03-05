import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from '@/Hooks/useTypedPage';
import {
    TbFriends,
    TbFileDescription,
} from 'react-icons/tb'

export default function Dashboard() {
    const data = useTypedPage().props;
    // console.log(data);
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-3xl text-gray-800">
          Dashboard
        </h2>
      )}
    >
      <div className="py-5">
        <div className="max-w-7xl items-center">
          <div className="greeting ml-[20px]">
            <h1 className='font-bold text-[40px]'>Selamat Datang <span className='text-mainblue'>{ data.user.name } </span>!</h1>
            <h3 className='text-[25px]'>Kelola Administrasi Desa Anda .</h3>
          </div>
          <div className='content flex flex-column gap-[20px] ml-[70px] mt-[40px]'>
        <div className='total-residents w-[400px] h-[200px] bg-mainblue rounded-md'>
        <div className='title-count inline text-putih '>
            <span className='flex'>
            <h1 className='font-bold relative ml-[60px] mt-[40px] text-[30px]'>Total Penduduk</h1><TbFriends className='relative ml-[10px] mt-[40px] w-[40px] h-[40px]' />
            </span>
        </div>
        <div className="counts">
        <h1 className='font-bold text-[50px] text-center text-putih'>{data.resident}</h1>
        </div>
        </div>
        <div className='total-letters w-[400px] h-[200px] bg-mainblue rounded-md'>
        <div className='title-count inline text-putih '>
            <span className='flex'>
            <h1 className='font-bold relative ml-[60px] mt-[40px] text-[30px]'>Total Surat Dibuat</h1><TbFileDescription className='relative ml-[10px] mt-[40px] w-[40px] h-[40px]' />
            </span>
        </div>
        <div className="counts">
        <h1 className='font-bold text-[50px] text-center text-putih'>{data.letter}</h1>
        </div>
        </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
