import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Header = () => {
    return(
        <Nav>
            <NavLogo to="/">
                A|R
            </NavLogo>
            <Bars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavLink to={item.link} key={index}>
                        {item.title}
                    </NavLink>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 200;
    position: relative;
    border-bottom: solid 1px #1d3557;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
`

const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    color: #e63946;
    font-weight: 400;
    font-size: 32px;

    & :hover {
        color: #1d3557;
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 1180px) {
        padding: 0px 16px;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    padding-left: 32px;
    color: #1d3557;
    font-weight: 400;

    & :hover {
        color: #e63946;
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 1180px) {
        padding: 0px 16px;
`

const Bars = styled(FaBars)`
    display: none;
    color: #264653;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
        font-size: 32px;
        cursor: pointer;
    }
`