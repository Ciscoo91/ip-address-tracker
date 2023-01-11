import { useEffect, useState } from 'react'
import {MapContainer, TileLayer } from "react-leaflet"
import DataCard from './components/DataCard.jsx'
import Map from './components/Map'
import Modal from './components/Modal'
import 'leaflet/dist/leaflet.css'
import {isIPOrDomain} from './utils'
import {initialSate} from './data'

function App() {

  const [data, setData] = useState(initialSate)
  // const [isLoading, setIsLoading] = useState(true)
  const [inputToSearch, setInputToSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const getLocationByIpOrDomain = async (input) => {
    
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_3VBBNCG6UauEtXDm7xvFw0sQhMmaC&${isIPOrDomain(input) ? 'ipAddress='+input : 'domain='+input}`)


    if(response.ok){
      const data = await response.json()
      setData(data)
    }else if(response.status == 403){
      console.log("An error occured")
      setShowModal(true)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getLocationByIpOrDomain(inputToSearch)
    setInputToSearch('')
  }


  return (
    <div className="h-full md:w-9/12 m-auto mb-0 drop-shadow-md">
      <section className="bg-[url('/images/pattern-bg.png')] bg-no-repeat h-64 md:h-56 border-1 flex flex-col justify-start items-center relative font-body">
        <h1 className='my-3 md:my-6 text-white text-2xl'>IP Address Tracker</h1>
        <form onSubmit={handleSubmit} className="my-2 flex flex-row justify-center align-center w-11/12 md:w-full">
          <input
            type="text" 
            placeholder="Search for any IP address or domain" 
            className="px-2 py-3 outiline-none w-full md:w-2/6 h-auto rounded-tl-xl rounded-bl-xl outline-0"
            onChange={(e)=> setInputToSearch(e.target.value)}
            />
          <button type="submit"  className=" bg-black text-white w-12 grid place-content-center font-bold rounded-tr-xl rounded-br-xl hover:cursor-pointer">&#62;</button>
        </form>
        <DataCard data={data}/>
      </section>
      <div className="h-screen">
        <MapContainer scrollWheelZoom={false} zoom={13} center={[data.location.lat, data.location.lng]} className="h-full md:h-1/2 z-10 max-w-screen-xl">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map position={[data.location.lat, data.location.lng]}/>
        </MapContainer>
      </div>
      <div className="attribution text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Francisco Mambo</a>.
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default App
