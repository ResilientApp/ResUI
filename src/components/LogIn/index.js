import React, { useState } from 'react'
import resilientDBLogo from '../../images/resilientdb_logo.svg';
import { GlobalStyle, ImageContainer, LogoImage, SignUpForm, SignUpH2, SignUpInput, ButtonsContainer, SignUpButtons } from '../Signup/SignUpElements';
import { Link, useNavigate } from 'react-router-dom'; 
import Navbar from '../Navbar';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://resui-backend.resilientdb.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the server sends a token upon successful login
        localStorage.setItem('userToken', data.token);
        // Redirect to a protected route or home page
        history('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <GlobalStyle/>
      <ImageContainer>
        <Link to="/">
            <LogoImage src={resilientDBLogo} width="300px" to="/"/>
        </Link>
      </ImageContainer>

      <SignUpForm>
        <SignUpH2>Log In</SignUpH2>

        <SignUpInput
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <SignUpInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonsContainer>
          <Link to="/signup">
            <SignUpButtons type="button" active="no">
              Sign Up
            </SignUpButtons>
          </Link>
          <SignUpButtons type="button" active="yes" onClick={handleLogin}>
            Login
          </SignUpButtons>
        </ButtonsContainer>
      </SignUpForm>
    </>
  );
};

export default LogIn;
