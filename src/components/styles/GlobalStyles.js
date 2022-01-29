import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "IBM Plex Sans", "IBM Plex Mono", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #f5f3f4;

        h1 {
            font-size: clamp(32px, 6vw, 64px);
            font-weight: 600;
            color: #1d3557;
        }

        h2 {
            font-size: clamp(24px, 6vw, 42px);
            font-weight: 500;
            line-height: clamp(32px, 6vw, 50px);
            color: #1d3557;
        }

        h3 {
            font-size: clamp(18px, 6vw, 32px);
            font-weight: 300;
            color: #457b9d;
        }

        h4 {
            font-size: clamp(18px, 6vw, 24px);
            font-weight: 300;
            color: #457b9d;
            background: none;
        }

        h5 {
            font-size: clamp(18px, 6vw, 32px);
            font-weight: 300;
            color: #457b9d;
        }

        h6 {
            font-size: clamp(18px, 6vw, 32px);
            font-weight: 300;
            color: #457b9d;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            line-height: 36px;
        }
    }
`