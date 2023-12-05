import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { MissionVision } from './MissionVision'
import { AboutContainer, AboutH1, AboutH2, AboutP, TealSpan, AboutWrapper, AboutCard, AboutIcon, AboutBtnWrapper } from './AboutUsElements' 
import bookIcon from '../../images/book2.png'
import humanIcon from '../../images/human3.png'
import roadIcon from '../../images/road.png'
import { Button } from '../ButtonElement'

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
          {/* <AboutH1>Who are we?</AboutH1> */}
          <MissionVision />
          {/* <MeetTheTeam /> */}
          {/* <Roadmap />
          <Publications /> */}
          
          <AboutH1 className="space">More About Us</AboutH1>
          <AboutWrapper>

            <AboutCard>
              <AboutH2>ROADMAP</AboutH2>
              <Link to="/roadmap">
                <AboutIcon src={roadIcon} style={{opacity: 0.7}}/>
              </Link>
              <AboutP>
                In the quest for innovation, each milestone - our roadmap, a testament to progress.
              </AboutP>
              <AboutBtnWrapper>
                <Button to="/roadmap">Explore Now</Button>
              </AboutBtnWrapper>
            </AboutCard>

            <AboutCard>
              <AboutH2>MEET THE TEAM</AboutH2>
              <Link to="/meet-the-team">
                <AboutIcon src={humanIcon} />
              </Link>
              <AboutP>
                The dedicated minds behind <TealSpan>ResilientDB</TealSpan> - individual stories, collective passion.
              </AboutP>
              <AboutBtnWrapper>
                <Button to="/meet-the-team">Get Started</Button>
              </AboutBtnWrapper>
            </AboutCard>
            
            <AboutCard>
              {/* <Link to="/publications"> */}
              <AboutH2>PUBLICATIONS</AboutH2> 
              <Link to="/publications">
                <AboutIcon src={bookIcon} />
              </Link>
              <AboutP>
                From research to revelation - our publications echo the symphony of discovery.
              </AboutP>
              <AboutBtnWrapper>
                <Button to="/publications">Learn More</Button>
              </AboutBtnWrapper>
            </AboutCard>
            
          </AboutWrapper>

        </AboutContainer>

        <Footer/>
    </>
  );
}

export default AboutUs;