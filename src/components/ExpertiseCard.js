// import * as React from "react"
import styled from "styled-components"

export const ExpertiseCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-top: 16px;
    // background: #264653;
    width: calc((100%-96px)/4);
    border: double #264653;

    h3 {
        color: #264653;
        background: none;
        font-size: 18px;
        font-weight: 500;
    }

    p {
        background: none;
        color: #264653;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        padding-top: 16px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        margin-top: 0;
        // background: #264653;
        width: 100%;
        border: double #264653;

        h3 {
            color: #264653;
        }

        p {
            color: #264653;
        }
    }
`