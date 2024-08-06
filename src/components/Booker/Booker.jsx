import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PlaceContext } from '../../context/PlaceProvider';
import { useNavigate, useParams } from 'react-router-dom';
import './Booker.css';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';



const Booker = ({ data}) => {
    const { setBookedDestination, bookedDestination} = useContext(PlaceContext)
    const { place } = useParams()
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()


    const dateMaker = (value) => {
        const dizzyDate = value.toLocaleDateString()
        const splitDate = dizzyDate.split('/')

        const straightDate = `${splitDate[1] + '-' + splitDate[0] + '-' + splitDate[2]}`
        return straightDate
    }

    const handleDatePicker = (value) => {
        if (value) {
            const dateStart = dateMaker(value[0])
            const dateEnd = dateMaker(value[1])
            setStartDate(dateStart);
            setEndDate(dateEnd);
        } else {
            setStartDate(null);
            setEndDate(null);
        }
    }


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const destinationFrom = form.destinationFrom.value;
        const destinationTo = form.destinationTo.value;
        
        if (!destinationFrom ||  !destinationTo) {
            alert('Enter Information Properly')
            form.reset()
            return
        }
        setBookedDestination({ destinationFrom: destinationFrom, destinationTo: destinationTo, checkIn: startDate, checkOut: endDate })
        
        navigate('/hotel')
        form.reset()
    }

   


    return (
        <div className='bg-light p-4 rounded '>
            <Form onSubmit={handleBooking}>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className='mt-3 text-dark'>Date Range</Form.Label>
                    <div>
                        <DateRangePicker
                            showHeader={false}
                            format={'dd-MM-yy'}
                            size={'lg'}
                            onOk={handleDatePicker}
                            placeholder="Select Date Range" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='mt-3 text-dark'>Origin</Form.Label>
                    <Form.Control type="text" name="destinationFrom" placeholder="Enter Your Location" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Destination</Form.Label>
                    <Form.Control type="text" name="destinationTo" defaultValue={place} readOnly placeholder="Enter Your Destination" />
                </Form.Group>
                <div className='d-flex justify-content-between my-3 '>

                    {/* <input type="date" name="checkIn" id="" className='py-2 px-5 rounded date-intp'  />
                    
                    <input type="date" name="checkOut" id="" className='py-2 px-5 rounded date-intp' /> */}
                </div>

                <Button className="w-100" variant="warning" type="Login">
                    Start Booking
                </Button>

            </Form>
        </div>
    );
};

export default Booker;