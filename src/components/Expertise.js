import * as React from "react"
import styled from "styled-components"
import { ExpertiseCard } from "./ExpertiseCard"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Expertise = () => {
    // query data
    const data = useStaticQuery(graphql`
        query ExpertiseQuery {
            allExpertiseJson {
                edges {
                    node {
                        alt
                        description
                        title
                        img {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)

    // iterate over JSON data
    function getExpertise(data) {
        const expertiseArray = []
        data.allExpertiseJson.edges.forEach((item, index) => {
            const image=getImage(item.node.img)
            expertiseArray.push(
                <ExpertiseCard key={index}>
                    <GatsbyImage
                        image={image}
                        alt={item.node.alt}
                    />
                    <h3>{item.node.title}</h3>
                    <p>{item.node.description}</p>
                </ExpertiseCard>
            )
        })
        return expertiseArray
    }
    return (
        <ExpertiseContainer>
            <ExpertiseH2><span>|</span>Expertise</ExpertiseH2>
            <ExpertiseH3>Solution architect from lean design to agile development</ExpertiseH3>
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
    margin-top: 16px;
    padding-bottom: 32px;
    position: relative;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 0 16px 32px 16px;
`

const ExpertiseH2 = styled.h2`
    span {
        color: #e63946;
        font-weight: 500;
    }
`

const ExpertiseH3 = styled.h3`
    color: #457b9d;
    font-weight: 300;
    font-size: clamp(18px, 6vw, 24px);
    padding-top: 16px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    padding-top: 16px;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        margin-top:16px
`