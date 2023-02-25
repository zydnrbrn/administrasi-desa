import React from "react"
import AppLayout from "@/Layouts/AppLayout"

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
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          </div>
        </div>
      </div>
    </AppLayout>
        </>
    )
}
