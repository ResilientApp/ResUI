import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Sponsors from '../components/Sponsors'
import {homeObjOne} from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Services/>
        <Sponsors/>
        <Footer/>
    </>
  )
}

export default Home