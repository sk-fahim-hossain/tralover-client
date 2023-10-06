import React from 'react';
import { FaStar } from 'react-icons/fa';


const HotelCard = ({ hotel }) => {
    const { image, location, id, rating, name, rooms } = hotel;

   
    const price = rooms.map((r, index) =>
        index === rooms.length - 1 ? '$' + r.price_per_night : '$' + r.price_per_night + ','
    )
    const roomType = rooms.map((r, index) =>
        index === rooms.length - 1 ? r.type : r.type + '/'
    )
    return (

        <div className="card mb-2">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center ps-2 ">
                    <img src={image} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body ps-2">
                        <h5 className="card-title p">{name}</h5>
                        <p className='m-0'>Guest <span>{roomType}</span></p>
                        <p className='m-0 d-flex justify-content-between'><small className="text-body-secondary"> <FaStar className='text-warning'></FaStar>{rating}</small><span>{price}/night</span></p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotelCard;