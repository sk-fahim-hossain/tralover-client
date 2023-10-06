import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import HomeLayout from '../../layout/homeLayout';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Hotel from '../../pages/Hotel/Hotel';
import Booking from '../../pages/Booking/Booking';
import LoginLayout from '../../layout/LoginLayout';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to='places/home'></Navigate> ,
        
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      
      
      {
        path: '/hotel',
        element: <PrivateRoute><Hotel></Hotel></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/hotel')
      }
    ]
  }
  ,
  {
    path:'places',
    element:<HomeLayout/>,
    children:[
      {
        path: 'home/booking/:id',
        element: <Booking></Booking>,
        loader: (({ params }) => fetch(`http://localhost:5000/places/${params.id}`))
      },
      {
        path:'home',
        element:<Home></Home>,
        loader: (() => fetch('http://localhost:5000/places'))
      }
    ]
  }
])


export default router;