import React from 'react'

export default function DataCard({data}) {
  console.log(data)
  return (
    <section className="flex justify-around my-3">
        <div className="">
          <h2 className="">IP ADDRESS</h2>
          <p className="">{data.ip}</p>
        </div>
        <div className="">
          <h2 className="">Location</h2>
          <p className="">{`lat: ${data.location?.lat} - lon: ${data.location?.lng}`}</p>
        </div>
        <div className="">
          <h2 className="">Timezone</h2>
          <p className="">UTC {data.location?.timezone}</p>
        </div>
        <div className="">
          <h2 className="">ISP</h2>
          <p className="">{data.as?.name}</p>
        </div>
    </section>
  )
}
