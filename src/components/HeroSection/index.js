import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
import "../../styles/animate.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover= () => {
    setHover(!hover)
  }
  return (
   <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <p class="line-1 anim-typewriter">&gt; ResCLI.</p>
            <HeroP>
            A command-line interface for managing ResilientDB and Python SDK instances. It provides functionalities to create, delete, view, and manage instances in a simple and efficient way.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
   </HeroContainer>
  )
}

export default HeroSection