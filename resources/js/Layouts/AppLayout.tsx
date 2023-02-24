import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Banner from '@/Components/Banner';
import { Team } from '@/types';
import { Link } from '@inertiajs/inertia-react'
import Sidebar from '@/Components/Sidebar'

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


  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }

  return (
    <div>
      <Head title={title} />

      <Banner />

      <div className="min-h-screen">
      <Sidebar />
        {/* <!-- Page Heading --> */}
        {renderHeader ? (
          <header className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {renderHeader()}
            </div>
          </header>
        ) : null}

        {/* <!-- Page Content --> */}
        <main className='sm:ml-10'>
        <Link href='/surat'>Surat</Link>
            {children}
            </main>
      </div>
    </div>
  );
}
