import React, { useContext } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Carousel.css'
import 'swiper/css';
import SwiperButtons from '../SwiperButtons/SwiperButtons';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Col, Row } from 'react-bootstrap';
import { PlaceContext } from '../../context/PlaceProvider';
import { Link, useNavigation } from 'react-router-dom';



const Carousel = ({ places }) => {
    const navigate = useNavigation()

    const { setCaroDetail } = useContext(PlaceContext)

    return (
        <div>
            <Swiper
                breakpoints={{
                    560: {
                        slidesPerView: 1
                    },
                    580:{
                        slidesPerView: 2
                    },
                    640: {
                        spaceBetween: 30,
                        // width: 640,
                        slidesPerView: 2,
                    },

                    768: {
                        // width: 768,
                        spaceBetween: 40,
                        slidesPerView: 2,
                    },
                    900:{
                        spaceBetween: 20,
                        slidesPerView: 3,
                    }
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                navigation
                loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >



                {
                    places.map(place => <SwiperSlide onMouseEnter={() => setCaroDetail(place)} key={place.image} className='slide'>
                        <Link className='text-decoration-none' to={`booking/${place?.id}`}>
                            <div className='single-slide'>
                                <img src={place.image} className='img-fluid' alt="" />
                                <p onClick={() => setCaroDetail(place)} >{place.name}</p>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
                <SwiperButtons ></SwiperButtons>

            </Swiper>
        </div >
    );
};

export default Carousel;