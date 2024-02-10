import { observer } from "mobx-react"
import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AddService from "../Services/AddService.jsx"
import EditBusinessData from "../businessData/EditBusinessData.jsx";


const AdminHome = (observer(() => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('services');

  }, []);

  return (
    <>


     <EditBusinessData/>

      <AddService/>

      <div className="button">
        <button className="buttonListMeet"><Link to='meetings'>meetings</Link></button>
        <button className="buttonListService"><Link to='services'>services</Link></button>
      </div>

      <Outlet/>
</>
  )
 }))

export default AdminHome 