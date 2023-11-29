import React from 'react'
import resilientDBLogo from '../../images/resilientdb_logo.svg';
import { GlobalStyle, ImageContainer, LogoImage, SignUpForm, SignUpH2, SignUpInput, ButtonsContainer, SignUpButtons } from '../Signup/SignUpElements';
import {Link} from 'react-router-dom';

const LogIn = () => {
  return (
    <>
      <GlobalStyle/>
      <ImageContainer>
        <Link to="/">
            <LogoImage src={resilientDBLogo} width="300px" to="/"/>
        </Link>
      </ImageContainer>

      <SignUpForm>
        <SignUpH2>Log In</SignUpH2>

        <SignUpInput type="text" placeholder="Email" />
        <SignUpInput type="password" placeholder="Password" />

        <ButtonsContainer>
          <Link to="/signup">
            <SignUpButtons type="submit" active="no">Sign Up</SignUpButtons>
          </Link>
          <Link to="/login">
            <SignUpButtons type="submit" active="yes">Login</SignUpButtons>
          </Link>
        </ButtonsContainer>
      </SignUpForm>
    </>
  )
}

export default LogIn;