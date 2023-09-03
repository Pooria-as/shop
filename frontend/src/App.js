import React from 'react'
import Header from './components/Header/Header'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
      <Container>
        <h1>
          Welcome to shop
        </h1>
      </Container>
      <Footer/> 

    </>
  )
}

export default App
