import React, { useContext } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import PlaceProvider, { PlaceContext } from '../../context/PlaceProvider';

const SwiperButtons = () => {
    const  {destination}= useContext(PlaceContext)
    // console.log('destination info:',destination)

    

    const swiper = useSwiper()
    return (
        <div>
            <IoIosArrowBack onClick={()=>swiper.slideNext()} className='carousel-btn me-2' />
                <IoIosArrowForward onClick={() => swiper.slidePrev()} className='carousel-btn' />
        </div>
    );
};

export default SwiperButtons;