import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import OneStopService from './pages/OneStopService.jsx'
import Footer from './pages/Option/Footer.jsx'
import NewsPage from './pages/News.jsx'
import ContactPage from './pages/Contact.JSX'
import PageNewsSub from './pages/Option/SubNews.jsx'
import AdminMain from './AdminSide/MainAdmin.jsx'
import RequestAdmin from './AdminSide/Request.jsx'
import TestWeb from './AdminSide/test.jsx'
import Login from './pages/Login.jsx'
import CheckReq from './pages/E-Service-Pages/CheckReq.jsx'
import AdminRequest from './AdminSide/AdminRequest.jsx'
import AdminComplain from './AdminSide/AdminComplain.jsx'
import AdminOrderPlace from './AdminSide/AdminOrderPlace.jsx'
import AdminAddNews from './AdminSide/AdminAddNews.jsx'
import AdminTax from './AdminSide/AdminTax.jsx'
import LoginEdit from './pages/LoginEdit.jsx'
import AdminHelp from './AdminSide/AdminCheckEservice.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },{
    path: 'login',
    element: <Login/>
  },
  {
    path: '1StopService',
    element: <OneStopService/>
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'Footer',
    element: <Footer/>
  },
  {
    path: 'News',
    element: <NewsPage/>
  },
  {
    path: 'ContactUs',
    element: <ContactPage/>
  },
  {
    path: 'newspage',
    element: <PageNewsSub/>
  },
  {
    path: 'Admin',
    element: <AdminMain/>
  },
  {
    path: 'RequestAdmin',
    element: <RequestAdmin/>
  },
  {
    path: 'test',
    element: <TestWeb/>
  },
  {
    path: 'sum',
    element: <CheckReq/>
  },
  {
    path: 'AdminReq',
    element: <AdminRequest/>
  },
  {
    path: 'AdminComplain',
    element: <AdminComplain/>
  },
  {
    path: 'AdminTax',
    element: <AdminTax/>
  },
  {
    path: 'AdminOrderPlace',
    element: <AdminOrderPlace/>
  }, 
  { path: 'AdminManageNews', 
    element: <AdminAddNews/>
  },
  { path: 'Help', 
    element: <AdminHelp/> 
  },
  {
    path: 'adminLogin', 
    element: <LoginEdit/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
