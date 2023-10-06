import React, { useContext } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import MapOutlet from '../../components/Map/MapOutlet';
import './Hotel.css'
import { useLoaderData } from 'react-router-dom';
import HotelCard from '../../components/HotelCard/HotelCard';
import { PlaceContext } from '../../context/PlaceProvider';


const Hotel = () => {
    const {bookedDestination} = useContext(PlaceContext)
    const data = useLoaderData()

    return (
        <div>
            <Container className=''>
                <Row xs={1} sm={1} md={2}>
                    <Col className=' ps-0 '>
                      <h4>Stay in {bookedDestination?.destinationTo}</h4>
                      <div className="hotel-card-holder pe-1">
                        {
                            data.map(h => <HotelCard key={h.id} hotel={h}></HotelCard>)
                        }
                      </div>
                    </Col>
                    <Col  className="rounded">
                        <MapOutlet></MapOutlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Hotel;