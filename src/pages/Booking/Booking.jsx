import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Booker from '../../components/Booker/Booker';
import { useLoaderData } from 'react-router-dom';


const Booking = () => {
    const data = useLoaderData()
    
    return (
        <Container className="booking mx-auto text-white">
            <Row>
                <Col sm={12} md={6}>
                    <div className=" d-flex align-items-center justify-content-center">
                        <div className='mt-5'>
                            <h3>{data.name}</h3>
                            <p className='mt-4 w-75 text-bold'>{data?.description}</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Booker data={data}></Booker>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;