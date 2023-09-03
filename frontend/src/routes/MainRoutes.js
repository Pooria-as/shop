import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainRoutes = () => {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default MainRoutes
