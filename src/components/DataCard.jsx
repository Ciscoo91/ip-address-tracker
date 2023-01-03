import React from 'react'

export default function DataCard({data}) {
  
  return (
    <section className="h-1/2 py-2 flex justify-around items-center my-3 bg-white rounded-2xl w-10/12 absolute left-1/2 -translate-x-2/4 -bottom-1/3 drop-shadow-lg z-20">
        <div className="pl-5 h-5/6 w-full flex flex-col items-start relative">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">IP ADDRESS</h2>
          <p className="mt-3 text-xl font-semibold">{data.ip}</p>
          {/* <p className="mt-3 text-xl font-semibold">192.212.174.101</p> */}
        </div>
        <div className="pl-5 h-5/6 w-full flex flex-col items-start relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">Location</h2>
          <p className="mt-3 text-xl font-semibold">{`${data.location?.city}, ${data.location?.region}, ${data.location?.postalCode}`}</p>
          {/* <p className="mt-3 text-xl font-semibold">Brooklyn, NY, 10001</p> */}
        </div>
        <div className="pl-5 h-5/6 w-full flex flex-col items-start relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">Timezone</h2>
          <p className="mt-3 text-xl font-semibold">UTC {data.location?.timezone}</p>
          {/* <p className="mt-3 text-xl font-semibold">UTC -05:50</p> */}
        </div>
        <div className="pl-5 h-5/6 w-full flex flex-col items-start relative after:absolute after:mt-2 after:left-0 after:content-[' '] after:h-5/6 after:border-l-2 border-gray-200 ">
          <h2 className="text-xs text-gray-400 font-semibold uppercase">ISP</h2>
          <p className="mt-3 text-xl font-semibold">{data.as?.name}</p>
          {/* <p className="mt-3 text-xl font-semibold">SpaceX Starlink</p> */}
        </div>
    </section>
  )
  // return (
  //   <section className="flex justify-around my-3">
  //       <div classNaw-full me="h-full flex flex-col items-start">
  //         <h2 className="">IP ADDRESS ml-5</h2>
  //         <p self-centerclassName="">{data.ip}</p>
  //       </div>
  //       <div className="">
  //         <h2 className="">Location</h2>
  //         <p className="">{`lat: ${data.location?.lat} - lon: ${data.location?.lng}`}</p>
  //       </div>
  //       <div className="">
  //         <h2 className="">Timezone</h2>
  //         <p className="">UTC {data.location?.timezone}</p>
  //       </div>
  //       <div className="">
  //         <h2 className="">ISP</h2>
  //         <p className="">{data.as?.name}</p>
  //       </div>
  //   </section>
  // )
}
