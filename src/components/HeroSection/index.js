import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'

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
            <HeroH1>A Global-Scale Sustainable Blockchain Fabric</HeroH1>
            <HeroP>
            ResilientDB offers a high-throughput yielding distributed ledger built upon scale-centric design 
            principles to democratize and decentralize computation.
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