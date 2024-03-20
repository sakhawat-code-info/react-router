import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/Users",
        element: <Users></Users>
      }
    ],
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
