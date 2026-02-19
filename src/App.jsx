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
import Checkout from './components/Checkout'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)
  
  const router =createBrowserRouter([
    {
     path:"/",
     element:<><Headers/><Home/></>
    },
     {
     path:"/Deals",
     element:<><Headers/><Deals/></>
    },
    {
     path:"/Shop",
     element:<><Headers/><Shop/></>
    },
    {
     path:"/Checkout",
     element:<><Headers/><Checkout/></>
    },
    {
     path:"/Newarrivals",
     element:<><Headers/><Newarrivals/></>
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



  ])
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<><Headers/><Home/></>
//   },

//    {
//     path:"/Deals",
//     element:<><Headers/><Deals/></>

//   },
//    {
//     path:"/Contact",
//     element:<><Navbar/><Contact/></>

//   },
//    {
//     path:"/Services",
//     element:<><Navbar/><Services/></>

//   },
//   {
//     path:"/user/:username",
//     element:<><Navbar/><User/></>

//   },

//  ])
  return (
    <>
    
     <RouterProvider router={router}/>
     
    
    </>
  )
}

export default App
