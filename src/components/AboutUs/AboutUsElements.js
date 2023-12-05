import {styled} from 'styled-components'
// import React from 'react';


export const AboutContainer = styled.div`
    // padding-top: 80px; //to account for the navbar
    background-color: #000;
    color: #fff;
    text-align:center;
`
export const AboutH1 = styled.h1`   
    // text-align:center;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    padding-top: 5%;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    &.space {
        padding-top: 20%;
        // padding-bottom
    }

`
export const AboutH2 = styled.h2`   
    padding: 1%;
    padding-top: 5%;
    color: #FFFFFF95;
    font-weight: thin;
    font-family: 'Josefin Slab', serif;
`

export const AboutH3 = styled.h3`   
    color: #FFFFFF95;
    font-weight: thin;
    font-family: 'Josefin Slab', serif;
`

export const AboutP = styled.p`
    color: #FFFFFF;
`

export const TealSpan = styled.span`
    color: #00BFB3;
    font-weight: bold;
`

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7%;
    margin-bottom: 15%;
`

export const AboutCard = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 400px;
    border-radius: 50%;
`

export const AboutIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    margin-top: 2%
`

export const AboutBtnWrapper = styled.div`
    width: 30%;
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`