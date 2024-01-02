


import { useContext } from 'react';
import Map, { Marker } from 'react-map-gl';
import { UserlocationContext } from './context/Userlocaioncontext';
import 'mapbox-gl/dist/mapbox-gl.css';

const Maps = () => {
  const{userLocation,setuserLocation}=useContext(UserlocationContext)
  return (
    <div>
        {userLocation?<Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: userLocation?.lng,
        latitude: userLocation?.lat,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={userLocation?.lng} latitude={ userLocation?.lat} anchor="bottom" >
      <img src="./pin.png"
      className='w-10 h-10'
      />
      
    </Marker>
    </Map>:null}
    </div>
  )
}

export default Maps