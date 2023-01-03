import {useEffect} from 'react'
import {useMap, Marker, Popup} from 'react-leaflet'

export const Map = ({position}) => {
    const map = useMap();

    useEffect(()=>{
        map.flyTo(position)
    }, [position])

    return <Marker position={position}>
                <Popup>
                  Initial IP adress {position}
                </Popup>
            </Marker>
}