import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import { PlaceContext } from '../../context/PlaceProvider';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Home.css'

const Home = () => {
   
    
    const{destination,caroDetail,setCaroDetail} = useContext(PlaceContext)
   
    const places = useLoaderData()
    
    if(!caroDetail.name){
        setCaroDetail(places[0])
    }
  
    // console.log('caro',caroDetail)

    return (
        <div>
            <Container className='mx-aut0'>
                <Row className=''>
                    <Col sm={12} md={4} className='home-info'>
                        <h3 className='text-white'>{caroDetail?.name || 'caro details'}</h3>
                        <p className='text-white'>{caroDetail?.description}</p>
                        <Link to={`booking/${caroDetail?.name}`} > <button className='btn btn-warning mb-3'>Booking <FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                    </Col>
                    <Col sm={12} md={8}>
                        <Carousel places={places}></Carousel>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;