import styled,{keyframes,css}  from "styled-components";
export const SponsorsContainer=styled.div`
    width: 100vw;
    height: 100vh;
    // color: #000000;
    background-color: #000;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const Wrapper=styled.div`
    width:100%;
    height: fit-content;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Text=styled.div`
    font-size: 35px;
    font-weight:1000;
    margin-bottom:10px;
    color: #fff;
`

export const Note=styled.div`
    font-size: 18px;
    font-weight:bold;
    margin-bottom:20px;
    color: #03B5AA;
`

export const Marquee=styled.div`
    display:flex;
    width:1200px;
    user-select:none;
     overflow:hidden;
    border: 1px solid  #03B5AA;

`

export const scrollX=keyframes`
    from{
        left: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
`

export const common = css`
    flex-shrink: 0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    white-space: nowrap;
    width:100%;

    animation: ${scrollX} 10s linear infinite;
`

export const MarqueeGroup=styled.div`
    ${common}
`

export const MarqueeGroup2=styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay:1s;
`

export const ImageGroup=styled.div`
    background-color: #fff;
    display:grid;
    place-items:center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 40vmin, 30rem)/10);
`

export const Image=styled.img`
    object-fit:contain;
    width:150%;
    height:150%;
    border-radius: 0.5rem;
    aspect-ratio:16/9;
    padding: 5px 20px;
    box-shadow: rgba(99,99,99,0.2) 0px 2px 8px 0px;
`