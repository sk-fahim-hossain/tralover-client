import React, { Children, createContext, useEffect, useState } from 'react';

export const PlaceContext = createContext(null)

const PlaceProvider = ({children}) => {
    const [destination,setDestination] = useState([])
    const [caroDetail,setCaroDetail] = useState({})
    const [bookedDestination,setBookedDestination] = useState({})
  

    useEffect(()=>{
        fetch('https://tralover-server.vercel.app/places')
        .then(res => res.json())
        .then(data => setDestination(data))
    },[])

    
      

    // console.log('context',destination[0]?.name)

    const handleSetPlaceDetails = () => {
        // setCaroDetail('click')
    }

    const destiationInfo = {
        destination,
       handleSetPlaceDetails,
       caroDetail,
       setCaroDetail,
       bookedDestination,
       setBookedDestination,
       
    }
    
    return (
        <PlaceContext.Provider value={destiationInfo}>
            {children}
        </PlaceContext.Provider>
    );
};

export default PlaceProvider;