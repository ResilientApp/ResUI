import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavDropdown,
  NavDropdownLinks,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [user, setUser] = useState(getUserFromToken()); // Set user state

  function getUserFromToken() {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        return token; // Assuming your user information is stored in the 'user' field of the token
      } catch (error) {
        // Invalid token or expired, handle accordingly
        return null;
      }
    }
    return null;
  }

  const handleLogout = () => {
    // Clear user token from localStorage
    localStorage.removeItem("userToken");

    // Clear user state
    setUser(null);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <Link to="/"><NavLogo src={logo}  className="left-logo"/></Link> */}
          <Link to="/">
          <NavLogo src={logo}  className="left-logo"/>
          </Link>
          {/* ResilientDB
            </NavLogo> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About Us</NavLinks>
              <NavDropdown>
                {/* <NavDropdownLinks to="/vision-mission">
                  Vision & Mission
                </NavDropdownLinks> */}
                <NavDropdownLinks to="/meet-the-team">
                  Meet the Team
                </NavDropdownLinks>
                <NavDropdownLinks to="/roadmap">Roadmap</NavDropdownLinks>
                <NavDropdownLinks to="/publications">
                  Publications
                </NavDropdownLinks>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Tools & Services</NavLinks>
              <NavDropdown>
                <NavDropdownLinks to="https://github.com/resilientdb/resilientdb" target="_blank">Github</NavDropdownLinks>
                <NavDropdownLinks to="https://explorer.resilientdb.com/" target="_blank">Explorer</NavDropdownLinks>
                <NavDropdownLinks to="https://monitoring.resilientdb.com/" target="_blank">Monitoring</NavDropdownLinks>
                <NavDropdownLinks to="https://prometheus.resilientdb.com/" target="_blank">Prometheus</NavDropdownLinks>
              </NavDropdown>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact Us</NavLinks>
            </NavItem>
            {user ? (
              <>
                <NavItem>
                  <NavLinks to="/instances">My Instances</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/instances" style={{ color: "#FFD700" }}>
                      Welcome, {user}
                  </NavLinks>
                  <NavDropdown>
                    <NavDropdownLinks to="#" onClick={handleLogout}>
                      Logout
                    </NavDropdownLinks>
                  </NavDropdown>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLinks to="/signup">Sign Up</NavLinks>
                </NavItem>
                <NavBtn>
                  <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
              </>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
