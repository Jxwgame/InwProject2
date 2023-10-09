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
import RequestAdmin from './AdminSide/Requset.jsx'
import TestWeb from './AdminSide/test.jsx'
import Login from './pages/Login.jsx'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
