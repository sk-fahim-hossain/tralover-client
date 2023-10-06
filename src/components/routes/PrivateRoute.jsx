import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    
    
    const location = useLocation();

    if(loading){
        return <h2>Loading..</h2>
    }

    if(user){
        return children
    }

    return <Navigate state={{from:location}} to="/login"></Navigate>;
};

export default PrivateRoute;