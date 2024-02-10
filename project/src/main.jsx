import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import AdminPage from './components/Admin/AdminPage.jsx'
// import EditBusnessData from './components/BusnessData/EditBusnessData.jsx'


import AdminPage from './components/Admin/AdminPage.jsx'
import ServicesList from './components/Services/ServicesList.jsx'
import MeetingList from './components/Meeting/MeetingList.jsx'
import UserHome from './components/User/UserHome.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserHome />,

  },
  {
    path: '/Admin',
    element: <AdminPage />,
    children: [
      {
        path:'services',
        element: <ServicesList/>
      }
      , {
        path:'meetings',
        element: <MeetingList/>
      },

    ]

  }

])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    {/* <App /> */}

  </React.StrictMode>,
)
