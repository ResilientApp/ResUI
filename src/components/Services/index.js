import React from 'react'
import Icon1 from '../../images/docker.svg'
import Icon2 from '../../images/storage.svg'
import Icon3 from '../../images/authentication.svg'

import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper,ServicesCard,ServicesIcon,ServicesP } from './ServiceElements' 

const Services = () => {
  return (
   <ServicesContainer id="services">
        <ServicesH1>Features</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Dockerized</ServicesH2>
                <ServicesP>Deploy your app effortlessly with Docker, easily configuring parameters for a seamless experience.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>In-Memory & Durable Storage</ServicesH2>
                <ServicesP>Enjoy rapid access as our system stores metadata in-memory, with seamless LevelDB and RocksDB integration for durability.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Secure Authentication</ServicesH2>
                <ServicesP>Safeguard confidently: Our system uses NIST-recommended cryptography for robust security.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>


   </ServicesContainer>
  )
}

export default Services