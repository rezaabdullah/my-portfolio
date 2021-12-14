import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Header = () => {
    return(
        <Nav>
            <NavLink to="/">
                <h1>A|R</h1>
            </NavLink>
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
    padding: 0px calc((100vw - 1180px) / 2);
    z-index: 200;
    position: relative;
    border-bottom: solid 1px #457B9D;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    // margin-right: 32px;

    @media screen and (max-width: 768px) {
        display: none;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    padding: 0 16px;
    color: #264653;

    h1 {
        color: #e76f51;
        font-weight: 400;

        & :hover {
            color: #264653;
            transition: ease-in-out 0.3s;
        }
    }

    & :hover {
        color: #e76f51;
        transition: ease-in-out 0.3s;
    }
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