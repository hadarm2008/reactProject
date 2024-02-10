import { observer } from "mobx-react"
import Login from './Login.jsx';
import AdminHome from './AdminHome.jsx';
import dataStore from '../Store/Store.js';

const AdminPage = (observer(() => {
  



  return (
    <>

      {!dataStore.isLogin ? <Login /> : <AdminHome />}


    </>
  )
}))

export default AdminPage
