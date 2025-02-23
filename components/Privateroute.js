import React from 'react'
import { isLoggedIn } from '../auth';
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute =()=>{
    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />
}

export default Privateroute;