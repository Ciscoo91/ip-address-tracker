import {useEffect} from 'react'
import {useMap, Marker, Popup} from 'react-leaflet'
import * as L from "leaflet"

const mapIcon = L.icon({
  iconUrl: "location-dot-solid.svg",
  iconSize: [40, 40]
})


export default function Map ({position}){
    const map = useMap();

    useEffect(()=>{
        map.flyTo(position)
    }, [position])

    return <Marker position={position} icon={mapIcon}>
                <Popup>
                  Initial IP adress {position}
                </Popup>
            </Marker>
}