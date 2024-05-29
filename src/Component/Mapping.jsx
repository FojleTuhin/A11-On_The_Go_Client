import { Map, Marker } from "pigeon-maps"
import { useState } from "react";

const Mapping = ({ Latitude, Longitude }) => {
    const [center, setCenter] = useState([])
    const [zoom, setZoom] = useState(15)

    console.log(Latitude, Longitude);
    console.log(center);
    return (
        <div>
            <Map
                height={300}
                center={[Latitude, Longitude]}
                zoom={zoom}
                anchor={[Latitude, Longitude]}
                onBoundsChanged={({ center, zoom }) => {
                    setCenter(center);
                    setZoom(zoom);
                   
                }}


            />
                
           
        </div>
    )
};

export default Mapping;