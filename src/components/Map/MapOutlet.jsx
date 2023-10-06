
import React from 'react';
import { Map, Marker } from "pigeon-maps"

const MapOutlet = () => {


    return (
        <div className="" style={{borderRadius: '20px', overflow: 'hidden'}}>
            <Map   height={700} defaultCenter={[23.794544202577313, 90.40422446204602]} defaultZoom={11}>
                <Marker width={30} anchor={[23.79359196325008, 90.40497548055062]} />
            </Map>
        </div>
    );
};

export default MapOutlet;