import{observer}from "mobx-react"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import dataStore from '../Store/Store.js';

import BusinessData from "../businessData/BusinessData.jsx";
import AddMeeting from "../Meeting/AddMeeting.jsx";
import ServicesList from "../Services/ServicesList.jsx";

const UserHome=(observer(()=> {
  
    const navigate = useNavigate();
 
    useEffect(() => {
      //  navigate('/user');
    },[])
    
    return (
      <>
      
     
     
   <BusinessData/>
    <AddMeeting/>
    <ServicesList/>
      </>
    )
  }))
  
  export default UserHome
  