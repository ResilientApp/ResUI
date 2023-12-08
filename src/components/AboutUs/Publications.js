import {styled} from 'styled-components'
import React from 'react';

const PublicationHeadingBox = styled.h1`
    width: fit-content;
    margin: 0 auto;
    margin-top: 100px;
    padding: 15px 20px;
    border: 2px solid #03B5AA;
    border-radius: 50px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 100px;
    background: #03B5AA;
    color: #eee;
`;

const PublicationBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 100px;
    padding-top: 0;
    gap: 20px;

    a {
        background: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: auto;
        min-height: 225px;
        width: 140px;
        padding: 20px;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        position: relative;
        border: 4px solid #03B5AA;

        &:before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-bottom: 32px solid #03B5AA;
            border-right: 32px solid transparent;
            top: -4px;
            right: -4px;
        }
        
        &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 32px solid #000;
            border-left: 32px solid transparent;
            top: -4px;
            right: -4px;
        }
          

        * {
            text-decoration: none;
        }

        &:hover {
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        svg {
            max-height: 24px;
            max-width: 24px;
            height: 100%;
            width: 100%;
            color: #54afa7;
            display: none;
        }

        p {
            font-size: 14px;
            line-height: 1.5715;
            padding-top: 8px;
            color: #222;
            font-weight: bold;
            margin-bottom: 0;
            margin-top: 10px;
            text-align: center;
        }

        span {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 600;
            color: rgb(255, 87, 51);
            text-align: center;
        }
    }
`

const publications = [
    {
        title: "ResilientDB Global Consensus",
        url: "http://www.vldb.org/pvldb/vol13/p868-gupta.pdf",
    },
    {
        title: "ResilientDB Fabric",
        url: "http://www.vldb.org/pvldb/vol13/p2893-rahnama.pdf",
    },
    {
        title: "Architectural Lessons Learned",
        url: "https://arxiv.org/abs/1911.09208",
    },
    {
        title: "Coordination-Free Concureency Control",
        url: "https://dl.acm.org/doi/10.1145/3274808.3274810",
        subtext: "[Best Paper Award, ACM Middleware'18]"
    },
    {
        title: "Cluster Sending Protocol",
        url: "https://arxiv.org/abs/1908.01455",
    },
    {
        title: "Wait Free Consensus",
        url: "https://arxiv.org/abs/1908.01458",
    },
    {
        title: "Speculative Consensus",
        url: "http://arxiv.org/abs/1911.00838",
    },
    {
        title: "Concurrent Consensus",
        url: "https://arxiv.org/abs/1911.00837",
    },
    {
        title: "Coordination-Free Replication",
        url: "https://drops.dagstuhl.de/opus/volltexte/2020/11941/pdf/LIPIcs-ICDT-2020-17.pdf",
    },
    {
        title: "Cerberus Minimalistic Sharded Consensus",
        url: "https://escholarship.org/uc/item/6h427354",
    },
    {
        title: "ByShard Theoretical Sharding Foundation",
        url: "https://expolab.org/papers/byshard-vldb.pdf",
    },
    {
        title: "Probabalistic Cluster Sending",
        url: "https://escholarship.org/uc/item/97s0f1gh",
    },
    {
        title: "RingBFT Practicial Sharded Topology",
        url: "https://arxiv.org/pdf/2107.13047.pdf",
    },
    {
        title: "ServerlessBFT",
        url: "https://arxiv.org/abs/2201.00982",
    },
    {
        title: "SGX Accelerated Consensus",
        url: "https://dl.acm.org/doi/10.1145/3552326.3587455",
        subtext: "[Best Paper Award, EuroSys'23]"
    },
]

const PdfIcon = () => (
    <svg focusable="false" class="" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path></svg>
)

export function Publications() {
    return (
        <>
            <PublicationHeadingBox>PUBLICATIONS</PublicationHeadingBox>
            <PublicationBox>
                {publications.map(({title, url, subtext}) => (
                    <a href={url} target='_blank'>
                        <PdfIcon />
                        <p>{title}</p>
                        {subtext && <span>{subtext}</span>}
                    </a>
                ))}
            </PublicationBox>
        </>
    )
}