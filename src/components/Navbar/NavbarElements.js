import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav=styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    // display: flex; //Changed by me to display logo on left most side
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;
    z-index:10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer=styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo=styled.img`
    display:flex;
    align-items:center;
    margin-right: 24px;
    height: 75px;
`;

// export const NavLogo=styled(LinkR)`
//     color: #03B5AA;
//     justify-self: flex-start;
//     cursor: pointer;
//     font-size: 1.5rem;
//     display:flex;
//     align-items:center;
//     margin-left: 24px;
//     font-weight:bold;
//     text-decoration:none;
// `;

export const MobileIcon=styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%); //centers it
        font-size:1.8rem;
        cursor:pointer;
        color: #fff;
    }
`;

export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-left:50px;
    margin-right:-22px;
    position: relative;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem=styled.li`
    height:80px;
    position: relative;
`;

export const NavDropdown = styled.div`
  display: none;
  position: absolute;
  top: 80px; 
  left: 0;
  width: 200px; 
  background: black;
  color: #03B5AA;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  ${NavItem}:hover & {
    display: flex;
    flex-direction: column;
  }
`;



export const NavLinks=styled(LinkS)`
    color: #fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;

    ${NavItem}:hover & {
        border-bottom: 6px solid  #03B5AA;
      }
    

    &.active{
        border-bottom: 3px solid  #96DED1;
    }

`;

export const NavBtn=styled.nav`
    display: flex;
    align-items: center;
    margin-left: 80px;
    
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtnLink= styled(LinkR)`
    border-radius: 50px;
    background: #03B5AA;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight:bold;
    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: #03B5AA;
    }
`;

export const NavDropdownLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color:  black; /* Add a background color on hover */
    color: #03B5AA;
  }
`;
