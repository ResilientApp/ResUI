import { styled } from 'styled-components'
import React from 'react';
import { AboutH1, AboutH2, AboutH3, AboutP, TealSpan } from './AboutUsElements'
import { Advisors, Founders, NexRes, Alumni } from './TeamInfo'
import linkedInIcon from '../../images/linked_in2.png'
import webIcon from '../../images/web.png'
import { Link } from 'react-router-dom'; 
import Navbar from '../Navbar'
import Footer from '../Footer'

const MeetTheTeamContainer = styled.div`
    display: flex-row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10%;
`

const TeamAdvisor = styled.div`
    display: flex;
    justify-content: center;
`

const TeamFounder = styled.div`
    display: flex;
    justify-content: center;
`

const TeamMember = styled.div`
 
`

const TeamMemberRow = styled.div`
    display: flex;
    justify-content: center;
`

const TeamAlumni = styled.div`

`

const TeamAlumiRow = styled.div`
    display: flex;
    justify-content: center;
`

const TeamCard = styled.div`
    text-align: center;
`
const ProfileImg = styled.img`
    border-radius: 50%;
    border: 5px solid white; 
    margin: 30px;
    width: 180px;
`
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const Icon = styled.img`
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 30px;
    margin: 5px;
`

// to horizontally and vertially center align the text;
const LabelWrapper = styled.div`
    // text-align: center;
    display: flex-column;
    justify-content: center;
    align-items: center;
`
const Label = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2%;
    color: #FFFFFF;
    &.name{
        font-weight: bold;
        color: #00BFB3;
    }
`

function CreateCard(person) {
    return (
        <TeamCard>
            <Link to={person.linkedIn} target="_blank">
                <ProfileImg 
                    key={person.id}
                    src={person.imgSrc}
                />
            </Link>
            <Label className="name">{person.name}</Label>
            <Label>{person.position}</Label>
        </TeamCard>
    );
}

//create Advisor and Founders to add website linked to their name
function CreateCardWithWeb(person) {
    return (
        <TeamCard>
            <Link to={person.linkedIn} target="_blank">
                <ProfileImg 
                    key={person.id}
                    src={person.imgSrc}
                />
            </Link>
            <Label className="name">{person.name}</Label>
            <LabelWrapper>
                <Label>{person.position}</Label>
            </LabelWrapper>
            <IconWrapper>
                <Link to={person.linkedIn} target="_blank" style={{color: 'white'}}>
                    <Icon src={linkedInIcon}/>
                </Link>
                <Link to={person.web} target="_blank">
                    <Icon src={webIcon}/>
                </Link>
            </IconWrapper>
            
        </TeamCard>
    );
}



export function MeetTheTeam() {
    return (
        <>
            <Navbar/>
            <MeetTheTeamContainer>
                <AboutH1>MEET THE TEAM</AboutH1>

                <AboutH2>OUR ADVISOR</AboutH2>
                <TeamAdvisor>
                    {Advisors.map(CreateCardWithWeb)}
                </TeamAdvisor>

               <AboutH2>OUR FOUNDER</AboutH2>
                <TeamFounder>
                    {Founders.map(CreateCardWithWeb)}
                </TeamFounder>

                <AboutH2>OUR NEXRES TEAM</AboutH2>
                <AboutH3>(Next Generation ResilientDB)</AboutH3>
                <TeamMember>
                    <TeamMemberRow>
                    {
                        NexRes
                        .filter(element => element.id >= 1 && element.id <= 5)
                        .map(CreateCard)
                    }
                    </TeamMemberRow>
                    <TeamMemberRow>
                    {
                        NexRes
                        .filter(element => element.id >= 6 && element.id <= 11)
                        .map(CreateCard)
                    }
                    </TeamMemberRow>
                    <TeamMemberRow>
                    {
                        NexRes
                        .filter(element => element.id >= 12 && element.id <= 16)
                        .map(CreateCard)
                    }
                    </TeamMemberRow>

                </TeamMember>

                <AboutH2>OUR ALUMNI</AboutH2>
                <TeamAlumni>
                    <TeamAlumiRow>
                    {
                        Alumni
                        .filter(element => element.id >= 1 && element.id <= 5)
                        .map(CreateCard)
                    }
                    </TeamAlumiRow>
                    <TeamAlumiRow>
                    {
                        Alumni
                        .filter(element => element.id >= 6 && element.id <= 10)
                        .map(CreateCard)
                    }
                    </TeamAlumiRow>
                    <TeamAlumiRow>
                    {
                        Alumni
                        .filter(element => element.id >= 11 && element.id <= 15)
                        .map(CreateCard)
                    }
                    </TeamAlumiRow>
                </TeamAlumni>

                <AboutH2>CONNECT WITH US!</AboutH2>
                <AboutP>Click on the photo to view our LinkedIn!</AboutP>
            </MeetTheTeamContainer>
        
            <Footer />
        </>
    )
}

