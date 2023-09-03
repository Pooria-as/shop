import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Product from '../pages/Product/Product'

const MainRoutes = () => {
  return (
   <>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Product/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default MainRoutes
