import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'
import{SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights} from './FooterElements'
import{FaFacebook, FaTwitter, FaYoutube, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
   <FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="https://expolab.org/" target="_blank">ExpoLab Blog</FooterLink>
                        <FooterLink to="/about">Meet the Team</FooterLink>
                        <FooterLink to="https://github.com/resilientdb/resilientdb" target="_blank">Github</FooterLink>
                        <FooterLink to="https://expolab.org/#service" target="_blank">Terms of Services</FooterLink>
                </FooterLinkItems>

                {/* <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">Contact Us</FooterLink>
                        <FooterLink to="/signin">ExpoLab Blog</FooterLink>
                        <FooterLink to="/signin">Github</FooterLink>
                        <FooterLink to="/signin">Terms of Services</FooterLink>
                </FooterLinkItems> */}
               
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    {/* <FooterLink to="/about">Support</FooterLink> */}
                    <FooterLink to="mailto:info@resilientdb.com">info@resilientdb.com</FooterLink>
                    <FooterLink to="mailto:support@resilientdb.com">support@resilientdb.com</FooterLink>
                </FooterLinkItems>
            {/* to add social media links */}
            {/* <FooterLinkItems>
                    <FooterLinkTitle>Business</FooterLinkTitle>
                        <FooterLink to="/signin">Youtube</FooterLink>
                        <FooterLink to="/signin">Github</FooterLink>
                        <FooterLink to="/signin">Twitter</FooterLink>
                </FooterLinkItems> */}
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    ResilientDB
                </SocialLogo>
                <WebsiteRights>ResilientDB © {new Date().getFullYear() + " "} 
                    All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="//www.youtube.com/@ExpoLabUCDavis" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                    <SocialIconLink href="//www.twitter.com/resilientdb" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                    <SocialIconLink href="//www.github.com/resilientdb" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
   </FooterContainer>
  )
}

export default Footer