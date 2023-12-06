import { styled } from 'styled-components'
import React from 'react';
import gopal from '../../images/gopal.jpeg';
import sasha from '../../images/sasha.jpeg';
import anh from '../../images/anh.jpeg';
import anubhav from '../../images/anubhav.jpeg';
import rishika from '../../images/rishika.jpeg';


const ContactHeadingBox = styled.h1`
    width: fit-content;
    margin: 0 auto;
    margin-top: 100px;
    padding: 15px 20px;
    border: 2px solid #03B5AA;
    border-radius: 50px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 50px;
    background: #03B5AA;
    color: #eee;
`;

const GitLinkBox = styled.a`
    width: fit-content;
    margin: 0 auto;
    margin-top: 0px;
    padding: 15px 30px;
    border: 2px solid #03B5AA;
    border-radius: 50px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 100px;
    background: #03B5AA;
    color: #eee;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-weight: bold;

    &:hover {
        transform: scale(1.013);
        transition: all 0.3s ease-in-out;
    }
`;

const ContactBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 100px;
    padding-top: 0;
    gap: 20px;

    & > div {
        display: flex;
        background: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 180px;
        padding: 20px;
        border: 2px solid #03B5AA;
        border-radius: 15px;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        * {
            text-decoration: none;
        }

        &:hover {
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        img {
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin-bottom: 20px;
            object-fit: cover;
        }

        svg {
            max-height: 25px;
            max-width: 25px;
            height: 100%;
            width: 100%;
            color: #54afa7;
        }

        span {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.5715;
            color: #111;
            margin: 0;
        }

        div {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 25px;
                width: 25px;
            }
        }
    }
`

const contacts = [
    {
        name: "Gopal Nambiar",
        image: gopal,
        linkedin: "https://www.linkedin.com/in/gopal-nambiar2/",
        email: "gnambiar@ucdavis.edu",
    },
    {
        name: "Sasha Pimento",
        image: sasha,
        linkedin: "https://www.linkedin.com/in/sasha-pimento/",
        email: "spimento@ucdavis.edu",
    },
    {
        name: "Dieu Anh Le",
        image: anh,
        linkedin: "https://www.linkedin.com/in/anh-le-379373232/",
        email: "ndale@ucdavis.edu",
    },
    {
        name: "Anubhav Mishra",
        image: anubhav,
        linkedin: "https://www.linkedin.com/in/anubhav-mishra-172726181/",
        email: "imishra@ucdavis.edu",
    },
    {
        name: "Rishika Garg",
        image: rishika,
        linkedin: "https://www.linkedin.com/in/rishika-garg-702a79192/",
        email: "risgarg@ucdavis.ede",
    },
]

const LinkedInIcon = () => (
    <svg width="25px" height="25px" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#03B5AA"></path> </g></svg>
);
const EmailIcon = () => (
    <svg width="25px" height="25px" viewBox="0 -5.5 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-412.000000, -259.000000)" fill="#54afa7"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail"> </path> </g> </g> </g></svg>
);
const GithubIcon = () => (
    <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
);

            
export function Contacts() {
    return (
        <>
            <ContactHeadingBox>Contact Us</ContactHeadingBox>
            <ContactBox>
                {contacts.map(({name, image, linkedin, email}) => (
                    <div>
                        <img src={image} />
                        <span>{name}</span>
                        <div>
                            {email && (<a href={"mailto:" + email} target="_blank"><EmailIcon /></a>)}
                            {linkedin && (<a href={linkedin} target="_blank"><LinkedInIcon /></a>)}
                        </div>
                    </div>
                ))}
            </ContactBox>
            <GitLinkBox href="https://github.com/gopuman/ResUI" target="_blank"><GithubIcon /> Github Repository Reference</GitLinkBox>
        </>
    )
}