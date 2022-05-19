import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Box from '../Components/Library/Box'
import MainContent from '../Components/MainContent'

const Home = () => {
  return (
    <Box
      width='100%'
      height='95vh'
      //bg='red'
      display='flex'
      justifyContent='center'
      alignItems= 'center'
      flexDirection = 'column'
    >
      <Header/>
      {/* <Main/> */}
      <MainContent/>
      <Footer/>
    </Box>
  )
}

export default Home