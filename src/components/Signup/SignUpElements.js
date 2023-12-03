import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    font-weight: 300;
    background: #010606;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  padding: 0;
  text-align: center;
`;

export const LogoImage = styled.img`
  width: ${(props) => props.width};
`;

export const SignUpForm = styled.form`
  // padding: 20px 0;
  margin: 5%;
  position: relative;
  text-align: center;
`;

export const SignUpH2 = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-bottom: 3%;
`;

export const SignUpInput = styled.input`
  border: 2px solid #00BFB3;
  background-color: #00BFB360;
  width: 250px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: #FFFFFF;

  &::placeholder {
    color: #FFFFFF80;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  padding: 1%;
`;

export const SignUpButtons = styled.button`
  appearance: none;
  outline: 0;
  background-color: ${(props) => (props.active === 'yes' ? '#00BFB3' : '#00BFB360')};
  color: ${(props) => (props.active === 'yes' ? '#FFFFFF' : '#FFFFFF90')};
  border: 0;
  padding: 10px 15px;
  border-radius: 25px;
  width: 115px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
