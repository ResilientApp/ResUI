import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'
import{SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights} from './FooterElements'
import{FaFacebook, FaTwitter, FaYoutube, FaGithub, FaBlog, FaDiscord, FaConnectdevelop} from 'react-icons/fa'

const Footer = () => {
  return (
   <FooterContainer>
    <FooterWrap>
        {/* <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="https://expolab.org/" target="_blank">ExpoLab Blog</FooterLink>
                        <FooterLink to="/meet-the-team">Meet the Team</FooterLink>
                        <FooterLink to="https://github.com/resilientdb/resilientdb" target="_blank">Github</FooterLink>
                        <FooterLink to="https://expolab.org/#service" target="_blank">Terms of Services</FooterLink>
                </FooterLinkItems>
               
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="mailto:info@resilientdb.com">info@resilientdb.com</FooterLink>
                    <FooterLink to="mailto:support@resilientdb.com">support@resilientdb.com</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterLinksContainer> */}

        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    ResilientDB
                </SocialLogo>
                <WebsiteRights>ResilientDB © {new Date().getFullYear() + " "} 
                    All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://youtube.com/@ExpoLabUCDavis" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                    <SocialIconLink href="https://twitter.com/resilientdb" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                    <SocialIconLink href="https://github.com/apache/incubator-resilientdb" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                    <SocialIconLink href="https://resilientdb.com/blog/" target="_blank" aria-label="Blog"><FaBlog/></SocialIconLink>
                    <SocialIconLink href="https://discord.gg/qbTVfZVs2M" target="_blank" aria-label="Discord"><FaDiscord/></SocialIconLink>
                    <SocialIconLink href="https://legacy.resilientdb.com" target="_blank" ><FaConnectdevelop/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
   </FooterContainer>
  )
}

export default Footer