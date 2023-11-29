import React from 'react'
import resilientDBLogo from '../../images/resilientdb_logo.svg';
import { GlobalStyle, ImageContainer, LogoImage, SignUpForm, SignUpH2, SignUpInput, ButtonsContainer, SignUpButtons } from './SignUpElements';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <GlobalStyle/>
      <ImageContainer>
        <Link to="/">
          <LogoImage src={resilientDBLogo} width="300px" to="/"/>
        </Link>
      </ImageContainer>

      <SignUpForm>
        <SignUpH2>Sign Up</SignUpH2>

        <SignUpInput type="text" placeholder="Name" />
        <SignUpInput type="text" placeholder="Email" />
        <SignUpInput type="password" placeholder="Password" />
        <SignUpInput type="password" placeholder="Confirm Password" />

        <ButtonsContainer>
          <SignUpButtons type="submit" active="yes">Sign Up</SignUpButtons>
          <Link to="/login">
            <SignUpButtons type="submit" active="no">Log In</SignUpButtons>
          </Link>
        </ButtonsContainer>
      </SignUpForm>
    </>
  )
}



export default SignUp;