import * as React from "react"
import styled from "styled-components"

const Blog = () => {
    return (
        <BlogContainer>
            <BlogH1><span>|</span>Portfolio</BlogH1>
            <BlogH2>Portfolio of my works and previous projects</BlogH2>
        </BlogContainer>
    )
}

export default Blog

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding-bottom: 32px;
    position: relative;
`

const BlogH1 = styled.h1`
    color: #1d3557;
    font-weight: 600;
    font-size: clamp(24px, 6vw, 36px);

    span {
        color: #e63946;
        font-weight: bold;
    }
`

const BlogH2 = styled.h2`
    color: #457b9d;
    font-weight: 300;
    font-size: clamp(18px, 6vw, 24px);
    padding-top: 16px;
`
