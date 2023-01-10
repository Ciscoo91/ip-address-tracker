import React from 'react'

export default function DataCard({data}) {
  
  return (
    <section className="md:h-1/2 w-11/12 md:w-10/12 py-2 my-3 flex flex-col md:flex-row justify-around items-center bg-white rounded-2xl absolute left-1/2 -translate-x-2/4 -bottom-1/2 md:-bottom-1/3 drop-shadow-lg z-20">
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">IP ADDRESS</h2>
          <p className="md:mt-3 text-xl font-semibold">{data.ip}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">Location</h2>
          <p className="md:mt-3 text-xl font-semibold">{`${data.location?.city}, ${data.location?.region}, ${data.location?.postalCode}`}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">Timezone</h2>
          <p className="md:mt-3 text-xl font-semibold">UTC {data.location?.timezone}</p>
        </div>
        <div className="mb-4 pl-5 h-5/6 w-full flex flex-col md:items-start items-center relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">ISP</h2>
          <p className="md:mt-3 text-xl font-semibold">{data.as?.name}</p>
        </div>
    </section>
  )
}
