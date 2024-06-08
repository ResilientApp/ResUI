import React, { useState } from 'react';
import resilientDBLogo from '../../images/resilientdb_logo.svg';
import { GlobalStyle, ImageContainer, LogoImage, SignUpForm, SignUpH2, SignUpInput, ButtonsContainer, SignUpButtons } from './SignUpElements';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const SignUp = () => {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form submission handler
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Send signup request to the server
    try {
      console.log(name, email, password);
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        swal(data.message);
        // Redirect to login page or perform other actions
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <>
      <GlobalStyle />
      <ImageContainer>
        <Link to="/">
          <LogoImage src={resilientDBLogo} width="300px" alt="ResilientDB Logo" />
        </Link>
      </ImageContainer>

      <SignUpForm onSubmit={handleSignUp}>
        <SignUpH2>Sign Up</SignUpH2>

        <SignUpInput type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <SignUpInput type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <SignUpInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <SignUpInput type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

        <ButtonsContainer>
          <SignUpButtons type="submit" active="yes">Sign Up</SignUpButtons>
          <Link to="/login">
          <SignUpButtons type="button" active="no">Log In</SignUpButtons>
          </Link>
        </ButtonsContainer>
      </SignUpForm>
    </>
  );
};

export default SignUp;
