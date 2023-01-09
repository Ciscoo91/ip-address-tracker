import { useEffect, useState } from 'react'
import {MapContainer, TileLayer } from "react-leaflet"
import DataCard from './components/DataCard.jsx'
import {Map} from './components/Map'
import 'leaflet/dist/leaflet.css'
import {isIPOrDomain} from './utils'
import {fakeData} from './data'
import {initialSate} from './data'

function App() {

  const [data, setData] = useState(initialSate)
  const [isLoading, setIsLoading] = useState(true)
  const [inputToSearch, setInputToSearch] = useState('')

  const getIpByLocation = async ()=>{

    const response = await fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_3VBBNCG6UauEtXDm7xvFw0sQhMmaC&ipAddress=")
    const data = await response.json()
    console.log(data)
    if(response.ok){
      setData(data)
      setIsLoading(false)
    }
  }

  const getLocationByIpOrDomain = async (input) => {
    
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_3VBBNCG6UauEtXDm7xvFw0sQhMmaC&${isIPOrDomain(input) ? 'ipAddress='+input : 'domain='+input}`)
    const data = await response.json()
    setData(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // getLocationByIpOrDomain(inputToSearch)
    const output = getFakeData()
    setData(output)

    setInputToSearch('')
  }

  const getFakeData = () => {
    return fakeData[Math.floor(Math.random() * fakeData.length)]
  }

  useEffect(()=>{
      // getIpByLocation()
      setIsLoading(false)
    }, [])

  return (
    <div className="h-auto md:w-9/12 mt-4 m-auto drop-shadow-md">
      <section className="bg-[url('/images/pattern-bg.png')] bg-no-repeat h-56 border-1 flex flex-col justify-start items-center relative">
        <h1 className='my-9 text-white text-2xl'>IP Address Tracker</h1>
        <form onSubmit={handleSubmit} className="flex flex-row justify-center align-center min-w-[50%]">
          <input
            type="text" 
            placeholder="Search for any IP address or domain" 
            className='px-2 py-3 outiline-none w-2/6 h-auto rounded-tl-xl rounded-bl-xl'
            onChange={(e)=> setInputToSearch(e.target.value)}
            />
          <button type="submit"  className=" bg-black text-white w-12 grid place-content-center font-bold rounded-tr-xl rounded-br-xl hover:cursor-pointer">&#62;</button>
        </form>
        <DataCard data={data}/>
      </section>
      <div className="h-screen">
          {isLoading ? <p>Loading...</p> : 
          <>
            <MapContainer scrollWheelZoom={false} zoom={13} center={[data.location.lat, data.location.lng]} className="h-1/2 z-10 max-w-screen-xl">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Map position={[data.location.lat, data.location.lng]}/>
            </MapContainer>
          </>}
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
