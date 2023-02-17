import React, { PropsWithChildren } from 'react';
import ApplicationLogo from './ApplicationLogo';
import { Image } from '@nextui-org/react';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen sm:justify-center items-center pt-6 sm:pt-0 bg-white">
      <div className="w-full md:gap-2 md:flex md:flex-row sm:max-w-md md:max-w-full md:mx-[100px] mt-6 px-6 py-4 bg-white sm:rounded-lg">
        <div className='md:mx-10'>
        <div className="logo-desa py-10">
        <ApplicationLogo />
        <h1 className="text-welcome font-extrabold text-[36px] md:text-[20px] lg:text-[36px]">Desa Bunijaya !</h1>
        <h2 className="text-welcome font-extrabold text-[20px] md:text-[15px] lg:test-[36px]">Login untuk mengelola desa anda .</h2>
        </div>
        {children}
        </div>
        <div className='px-[200px] py-[100px]'>
            <Image className='md:w-[300px] md:h-[600px] invisible md:visible' src='https://ik.imagekit.io/3upgjbxqx/administrasi-desa/desa-bunijaya/undraw_Small_town_re_7mcn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676273951355'></Image>
        {/* <img className='md:w-[297] md:h-[582] invisible md:visible' src="https://ik.imagekit.io/3upgjbxqx/administrasi-desa/desa-bunijaya/undraw_Small_town_re_7mcn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676273951355" /> */}
        </div>
      </div>
    </div>
  );
}
