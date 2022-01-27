// import * as React from "react"
import styled from "styled-components"

export const ExpertiseCard = styled.div`
    display: flex;
    background: #ffffff;
    flex-direction: column;
    padding: 16px;
    margin-top: 16px;
    width: calc((100%-96px)/4);
    box-shadow: 0 0 4px 2px #e3e3e3;

    &:hover {
        transform: scale(1.05);
        transition: ease-in-out 0.5s;
    }

    h3 {
        padding-top: 32px;
        color: #1d3557;
        background: none;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        background: none;
        color: #1d3557;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        padding-top: 16px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        margin-top: 0;
        width: 100%;

        h3 {
            color: #1d3557;
        }

        p {
            color: #1d3557;
        }
    }
`