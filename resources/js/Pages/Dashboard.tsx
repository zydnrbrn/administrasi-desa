import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from '@/Hooks/useTypedPage';

export default function Dashboard() {
    const data = useTypedPage().props;
    console.log(data);
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="ml-10 font-semibold text-xl text-gray-800">
          Dashboard
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            { data.user.name }
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
