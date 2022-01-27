import * as React from "react"
import Expertise from "./Expertise"
import Header from "./Header"
import Hero from "./Hero"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Helmet } from "react-helmet"

const Layout = ({children}) => {
    return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home | Abdullah Reza</title>
            <link rel="canonical" href="https://abdullahreza.gatsbyjs.io/" />
        </Helmet>
        <GlobalStyle />
        <Header />
        <Hero />
        <Expertise />
    </>
    )
}

export default Layout