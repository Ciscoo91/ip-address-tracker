import React from 'react'

export default function DataCard({data}) {
  
  return (
    <section className="md:h-1/2 w-11/12 md:w-10/12 py-2 flex flex-col md:flex-row justify-around items-center bg-white rounded-2xl absolute left-1/2 -translate-x-2/4 -bottom-36 md:-bottom-1/4 drop-shadow-lg z-20">
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative">
          <h2 className="mt-1 text-xs text-gray-400 font-medium uppercase">IP ADDRESS</h2>
          <p className="md:mt-3 text-xl font-medium">{data.ip}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="mt-1 text-xs text-gray-400 font-medium uppercase">Location</h2>
          <p className="md:mt-3 text-xl font-medium">{`${data.location?.city}, ${data.location?.region}, ${data.location?.postalCode}`}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="mt-1 text-xs text-gray-400 font-medium uppercase">Timezone</h2>
          <p className="md:mt-3 text-xl font-medium">UTC {data.location?.timezone}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="mt-1 text-xs text-gray-400 font-medium uppercase">ISP</h2>
          <p className="md:mt-3 text-xl font-medium">{data.as?.name}</p>
        </div>
    </section>
  )
}
