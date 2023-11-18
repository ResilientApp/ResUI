import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
  return (
    <>
         <Nav> 
          <NavbarContainer>
            <NavLogo to="/">       
              ResilientDB
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services'>Tools & Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='contact'>Contact Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup'>Sign Up</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavMenu>
          </NavbarContainer>
         </Nav>
    </>
  )
}

export default Navbar