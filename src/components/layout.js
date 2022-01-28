import * as React from "react"
import Expertise from "./Expertise"
import Header from "./Header"
import Hero from "./Hero"
import Blogs from "./Blogs"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Layout = ({children}) => {
    return (
        <MainContainer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Abdullah Reza</title>
                <link rel="canonical" href="https://abdullahreza.gatsbyjs.io/" />
            </Helmet>
            <GlobalStyle />
            <Header />
            <Hero />
            <Expertise />
            <Blogs />
        </MainContainer>
    )
}

export default Layout

const MainContainer = styled.div`
    padding: 0px calc((100vw - 1180px) / 2);
`