import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PlaceContext } from '../../context/PlaceProvider';
import { useNavigate } from 'react-router-dom';
import './Booker.css';



const Booker = ({data}) => {
    const {setBookedDestination,bookedDestination}= useContext(PlaceContext)
    const navigate = useNavigate()
    
    const handleBooking=(event)=>{
        event.preventDefault();
        const form = event.target;
        const destinationFrom = form.destinationFrom.value;
        const destinationTo = form.destinationTo.value;
        const checkInDate = form.checkIn.value;
        const checkOutDate = form.checkOut.value;
        console.log(destinationFrom,checkOutDate,checkInDate,destinationTo);
        if(!destinationFrom || !checkOutDate||!checkInDate||!destinationTo){
            alert('Enter Information Properly')
            form.reset()
            return
        }
        setBookedDestination({destinationFrom:destinationFrom,destinationTo:destinationTo,checkIn:checkInDate,checkOut:checkOutDate})
        navigate('/hotel')
        form.reset()
    }
    
    return (
        <div className='bg-light p-4 rounded mt-5'>
            <Form onSubmit={handleBooking}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='mt-3 text-dark'>Origin</Form.Label>
                    <Form.Control type="text" name="destinationFrom" placeholder="Enter Your Location" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Destination</Form.Label>
                    <Form.Control type="text" name="destinationTo"  placeholder="Enter Your Destination" />
                </Form.Group>
                <div className='d-flex justify-content-between my-3 '>
                    <input type="date" name="checkIn" id="" className='py-2 px-5 rounded date-intp'  />
                    
                    <input type="date" name="checkOut" id="" className='py-2 px-5 rounded date-intp' />
                </div>

                <Button className="w-100" variant="warning" type="Login">
                    Start Booking
                </Button>

            </Form>
        </div>
    );
};

export default Booker;