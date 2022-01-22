import * as React from "react"
import styled from "styled-components"
import { ExpertiseCard } from "./ExpertiseCard"
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Expertise = () => {
    // query data
    const data = useStaticQuery(graphql`
        query ExpertiseQuery {
            allExpertiseJson {
                edges {
                    node {
                        title
                        description
                    }
                }
            }
        }
    `)

    // iterate over JSON data
    function getExpertise(data) {
        const expertiseArray = []
        data.allExpertiseJson.edges.forEach((item) => {
            expertiseArray.push(
                <ExpertiseCard>
                    <h3>{item.node.title}</h3>
                    <p>{item.node.description}</p>
                </ExpertiseCard>
            )
        })
        return expertiseArray
    }
    return (
        <ExpertiseContainer>
            <ExpertiseH1><span>|</span>Expertise</ExpertiseH1>
            <ExpertiseH2>Solution architect from lean design to agile development</ExpertiseH2>
            <CardContainer>
                {getExpertise(data)}
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