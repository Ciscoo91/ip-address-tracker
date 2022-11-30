import { useEffect, useState, startTransition } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import DataCard from './components/DataCard.jsx'
import './App.css'
import 'leaflet/dist/leaflet.css'

function App() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [inputToSearch, setInputToSearch] = useState('')

  const getIpByLocation = async ()=>{

    const response = await fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_DKICzQIg2c9XHjYagTuFySDDzA3u8&ipAddress=")
    const data = await response.json()
    console.log(data)
    if(response.ok){
      setData(data)
      setIsLoading(false)
    }
  }
  useEffect(()=>{
        getIpByLocation()
    }, [])

  const isIPOrDomain = (input) => {
    return input.match(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/) ? true : false
  }

  const getLocationByIpOrDomain = async (input) => {
    
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_DKICzQIg2c9XHjYagTuFySDDzA3u8&${isIPOrDomain(input) ? 'ipAddress='+input : 'domain='+input}`)
    const data = await response.json()
    setData(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("I've been dispatched")
    getLocationByIpOrDomain(inputToSearch)
    setInputToSearch('')
  }

  return (
    <div className="bg-gray-200">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search for any IP address or domain" 
          className='px-2 py-3 outiline-none'
          onChange={(e)=> setInputToSearch(e.target.value)}
          />
        <input type="submit"  className="px-5 py-3 bg-black text-white" value=">" />
      </form>
      <div className="h-screen">
          {isLoading ? <p>Loading...</p> : 
          <>
            <DataCard data={data}/>
            <MapContainer scrollWheelZoom={false} zoom={13} center={[data.location.lat, data.location.lng]} className="h-1/2">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.location.lat, data.location.lng]}>
                <Popup>
                  Initial IP adress {[data.location.lat, data.location.lng]}
                </Popup>
              </Marker>
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
