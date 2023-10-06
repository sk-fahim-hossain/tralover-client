import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import './HomeLayout.css'

const HomeLayout = () => {
    return (
        <div className="dark-bg">
            <div className='layout'>
                <Navigationbar></Navigationbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;