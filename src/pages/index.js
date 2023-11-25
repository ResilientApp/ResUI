import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import {homeObjOne} from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => { //function for toggling
    setIsOpen(!isOpen)
  }
  return (
    <>
        <Sidebar  isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Services/>
        <Footer/>
    </>
  )
}

export default Home