import React from 'react'
import { SponsorsContainer, Wrapper,Text,Note, Marquee,MarqueeGroup,ImageGroup,Image, MarqueeGroup2 } from './SponsorsElements'

const row1=[
    "https://expolab.org/images/nsf.png",
    "https://expolab.org/images/doe.png",
    "https://expolab.org/images/radix.png",
    "https://i.imgur.com/w4KqRQL.png",
    "https://i.imgur.com/CRyQWRK.png",
    "https://lawr.ucdavis.edu/logos/images/expanded_logo_blue.png",
    


];
const row2=[
    "https://expolab.org/images/google.png",
    "https://expolab.org/images/aws.png",
    "https://expolab.org/images/microsoft.png",
    "https://expolab.org/images/logo_mousebelt.svg",
    "https://expolab.org/images/oracle.png",
    "https://cs.ucdavis.edu/sites/g/files/dgvnsk8441/files/cs_logo_125px.png"
];


const Sponsors = () => {
  return (
    <SponsorsContainer>
        <Wrapper>
        <Text>Sponsors</Text>
        <Note>We are grateful for the continued support from our following sponsors.</Note>
        <Marquee>
            <MarqueeGroup>
                {
                    row1.map(el=>(
                        <ImageGroup>
                            <Image src={el} />
                        </ImageGroup>

                    ))
                }
            </MarqueeGroup>
            <MarqueeGroup>
                {
                    row1.map(el=>(
                        <ImageGroup>
                            <Image src={el} />
                        </ImageGroup>

                    ))
                }
            </MarqueeGroup>
        </Marquee>

        <Marquee>
            <MarqueeGroup2>
                {
                    row2.map(el=>(
                        <ImageGroup>
                            <Image src={el} />
                        </ImageGroup>

                    ))
                }
            </MarqueeGroup2>
            <MarqueeGroup2>
                {
                    row2.map(el=>(
                        <ImageGroup>
                            <Image src={el} />
                        </ImageGroup>

                    ))
                }
            </MarqueeGroup2>
        </Marquee>

        </Wrapper>
    </SponsorsContainer>
  )
}

export default Sponsors