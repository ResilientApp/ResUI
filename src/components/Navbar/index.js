import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,NavDropdown, NavDropdownLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.png'

const Navbar = ({toggle}) => {
  return (
    <>
         <Nav> 
          <NavbarContainer>
            <NavLogo src={logo} />       
              {/* ResilientDB
            </NavLogo> */}
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'>About Us</NavLinks>
                    <NavDropdown>
                    <NavDropdownLinks to='vision-mission'>Vision & Mission</NavDropdownLinks>
                    <NavDropdownLinks to='meet-the-team'>Meet the Team</NavDropdownLinks>
                    <NavDropdownLinks to='roadmap'>Roadmap</NavDropdownLinks>
                    <NavDropdownLinks to='publications'>Publications</NavDropdownLinks>
                    </NavDropdown>
                </NavItem>
                <NavItem>
                    <NavLinks to='services'>Tools & Services</NavLinks>
                    <NavDropdown>
                    <NavDropdownLinks to='explorer'>Explorer</NavDropdownLinks>
                    <NavDropdownLinks to='monitoring'>Monitoring</NavDropdownLinks>
                    <NavDropdownLinks to='deployment'>Deployment</NavDropdownLinks>
                    </NavDropdown>
                </NavItem>
                <NavItem>
                    <NavLinks to='contact'>Contact Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/signup'>Sign Up</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
            </NavMenu>
          </NavbarContainer>
         </Nav>
    </>
  )
}

export default Navbar