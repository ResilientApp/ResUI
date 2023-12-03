import PropTypes from 'prop-types'
import React from 'react'
import {styled} from 'styled-components'

export const VideoContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    height: 100vh;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 5%;
    margin-bottom: 10%;

    // @media screen and (max-width:1000px){
    //     grid-template-columns: 1fr 1fr;
    // }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const VideoTopRow = styled.div`
    display: grid;
    justify-content: center;
`

export const VideoBottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
`

export const VideoBox = styled.div`
    background: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    width: 500px;
    padding: 10%;
    box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    // overflow: hidden;
    padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 = 0.5625 or 56.25%) */
    padding-bottom: 60%;
    position: relative;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    &.missionBox{
        height: 550px;
        width: 1030px;
        padding-bottom: 40%;
    }
`

const VideoFrame = styled.iframe`
    left: 5%;
    // top: 20%;
    bottom: 5%;
    height: 50%;
    width: 90%;
    position: absolute;
    border-radius: 10px;

    &.missionVideo {
        left: 25%;
        width: 50%;
    }
`


export const YoutubeEmbed = ({ embedId, cName }) => (
//   <VideoBox>
    <VideoFrame
        className={cName}
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Embedded youtube"
        allowFullScreen
    />
//   </VideoBox>
);

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

