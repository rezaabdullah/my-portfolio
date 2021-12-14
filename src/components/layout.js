import * as React from "react"
import Expertise from "./Expertise"
import Header from "./Header"
import Hero from "./Hero"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({children}) => {
    return (
    <>
        <GlobalStyle />
        <Header />
        <Hero />
        <Expertise />
    </>
    )
}

export default Layout