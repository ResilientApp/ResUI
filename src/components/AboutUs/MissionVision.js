import { styled } from 'styled-components'
import React from 'react';
import { VideoContainer, VideoBox, YoutubeEmbed, VideoTopRow, VideoBottomRow } from './YoutubeEmbed';
import { AboutH1, AboutH2, AboutP } from './AboutUsElements'

export function MissionVision() {
    return (
        <>
            <VideoContainer>
                <VideoTopRow>
                    <VideoBox className="missionBox">
                        <AboutH2>Our Mission</AboutH2>
                        <AboutP>
                            The inception of Bitcoin and blockchain have renewed the vision of a democratic and decentralized computational paradigm, that is, to ingrain privacy, integrity, transparency, and accountability into the very fabric of the computational model. At the heart of this paradigm shift lies a family of fault-tolerant consensus protocols, a classical distributed theory problem that has failed to fulfill the needs of high-performant modern applications. To close this gap, we have boldly re-imagined the entire blockchain fabric through a scale-centric lens in ResilientDB. We have re-architected and re-imagined modular system design from scratch that embeds parallelism and deep pipelining at every layer to fully exploit modern hardware and cloud infrastructure globally. 
                        </AboutP>
                        <YoutubeEmbed
                            embedId="whgGTSQttds" 
                            cName="missionVideo"
                        />
                    </VideoBox>
                </VideoTopRow>
                
                <VideoBottomRow>
                    <VideoBox>
                        <AboutH2>Our Vision</AboutH2>
                        <AboutP>
                        Re-imagining democratization and decentralization in building, ResilientDB, a sustainable blockchain ecosystem, developed & deployed at planet-scale using bare metal infrastructure generously offered by Oracle Cloud.
                        </AboutP>
                        <YoutubeEmbed embedId="QlwnZuBHqM4" />
                    </VideoBox>

                    <VideoBox>
                        <AboutH2>Our NexRes</AboutH2>
                        <AboutP>
                        Our mission led by Prof. Mohammad Sadoghi is to pioneer a new distributed ledger—referred to as ResilientDB—that unifies secure transactional and real-time analytical processing, all centered around a democratic and decentralized computational model. We envision ResilientDB to serve as a platform to foster "creativity".
                        </AboutP>
                        <YoutubeEmbed embedId="ewtFSwjitsg" />
                    </VideoBox>
                </VideoBottomRow>
                
            </VideoContainer>
        </>
    )
}
