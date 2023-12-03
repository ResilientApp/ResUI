import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import { MissionVision } from './MissionVision'
import { MeetTheTeam } from './MeetTheTeam'
import { Roadmap } from './Roadmap'
import { Publications } from './Publications'
import { AboutContainer, AboutH1 } from './AboutUsElements'

const AboutUs = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => { //function for toggling
    setIsOpen(!isOpen)
  }
  return (
    <>
        <Sidebar  isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
  
        <AboutContainer>
          <AboutH1>About Us</AboutH1>
          <MissionVision />
          <MeetTheTeam />
          <Roadmap />
          <Publications />
        </AboutContainer>
        

        <Footer/>
    </>
  )
}

export default AboutUs;