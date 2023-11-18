import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper, SidebarMenu, SidebarLink,SidebarRoute,SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
   <>
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>About Us </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Tools & Services</SidebarLink>
            <SidebarLink to='contact' onClick={toggle}>Contact Us</SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
   </SidebarContainer>
   </>
  )
}

export default Sidebar