import { useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import Home from './components/Home'
import Deals from './components/Deals'
import Shop from './components/Shop'
import Newarrivals from './components/Newarrivals'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Forget from './components/Forget'
import Mycheckout from './components/Mycheckout'
import Confirmation from './components/Confirmation'
import Footer from './components/Footer'
import Resend from './components/Resend'
import Contactus from './components/Contactus'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  
  
  const router =createBrowserRouter([
    {
     path:"/",
     element:<><Headers/><Home/></>
    },
    
    {
     path:"/Shop",
     element:<><Headers/><Shop/></>
    },
   
    {
     path:"/Mycheckout",
     element:<><Headers/><Mycheckout/></>
    },
    {
     path:"/Cart",
     element:<><Headers/><Cart/></>
    },
     {
     path:"/Signup",
     element:<><Headers/><Signup/></>
    },

      {
     path:"/Signin",
     element:<><Headers/><Signin/></>
    },

     {
     path:"/Forget",
     element:<><Headers/><Forget/></>
    },
     {
     path:"/Confirmation",
     element:<><Headers/><Confirmation/></>
    },
     {
     path:"/Resend",
     element:<><Headers/><Resend/></>
    },
     {
     path:"/Contactus",
     element:<><Headers/><Contactus/></>
    },
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
