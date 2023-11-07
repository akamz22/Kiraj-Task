import ReactDOM from 'react-dom/client'
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
const AppLayout = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/product',
          element: <Product />
        },
      ],
    }
  ]
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter} />
  // <AppLayout/>
)
