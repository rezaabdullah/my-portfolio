import * as React from "react"
import styled from "styled-components"
import { ExpertiseCard } from "./ExpertiseCard"

const Expertise = () => {
    return (
        <ExpertiseContainer>
            <ExpertiseH1><span>|</span>Expertise</ExpertiseH1>
            <ExpertiseH2>Solution architect from lean design to agile development</ExpertiseH2>
            <CardContainer>
                <ExpertiseCard>
                    <h3>Design Thinking</h3>
                    <p>An ardent supporter of design thinking and emphathizing users to understand the entire spectrum of the problem space</p>
                </ExpertiseCard>
                <ExpertiseCard>
                    <h3>Lean Startup</h3>
                    <p>A practitioner of the Lean Startup principles for delivering business value and reduce product development cycle by designing MVP</p>
                </ExpertiseCard>
                <ExpertiseCard>
                    <h3>Agile Practitioner</h3>
                    <p>An advocate to embrace scaled agile framework to develop enterprise-class cyber-physical system with human-centered design</p>
                </ExpertiseCard>
                <ExpertiseCard>
                    <h3>Data Science</h3>
                    <p>Full stack data scientist (data engineering & data science) to develop augmented digital solution with machine learning and artificial intelligence</p>
                </ExpertiseCard>
            </CardContainer>
        </ExpertiseContainer>
    )
}

export default Expertise

const ExpertiseContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 calc((100vw - 1180px) / 2);
    margin-top: 16px;
    padding-bottom: 32px;
    position: relative;
    border-bottom: solid 1px #457B9D;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 0 16px 32px 16px;
`

// const ExpertiseCard = styled.div``

const ExpertiseH1 = styled.h1`
    color: #264653;
    font-weight: 600;
    font-size: clamp(24px, 6vw, 36px);

    span {
        color: #E76F51;
        font-weight: bold;
    }
`

const ExpertiseH2 = styled.h2`
    color: #2A9d8F;
    font-weight: 300;
    font-size: clamp(18px, 6vw, 24px);
    padding-top: 8px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        margin-top:16px
`