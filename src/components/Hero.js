import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { GrLinkedin, GrGithub, GrMedium, GrMail} from "react-icons/gr"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <StaticImage src="../images/abdullah_reza_linkedin.png" alt="Portait of Abdullah Reza" />
            </HeroBg>
            <HeroContent>
                <IntroSpan>Hi, my name is</IntroSpan>
                <HeroH1>Abdullah Reza.</HeroH1>
                <HeroH2>I build data-driven digital solutions.</HeroH2>
                <IntroP>
                    I am a product manager specializing in designing and building exceptional digital 
                    products; a mechanical engineer turned data scientist with experience in building 
                    cloud-native IoT solutions, data (ML/AI) products. Currently, I’m focused on designing 
                    accessible, human-centered digital solution to revolutionize agriculture value chain
                    at <HeroLink to="https://www.lightcastlebd.com/"> LightCastle Partners.</HeroLink>
                </IntroP>
                <HeroProfile>
                    {/* <ContactCTA>Resume</ContactCTA> */}
                    <Link to="https://linkedin.com/in/airreza"><LinkedInIcon /></Link>
                    <Link to="https://github.com/rezaabdullah"><GithubIcon /></Link>
                    <Link to="https://medium.com/@abdullahreza"><MediumIcon /></Link>
                    {/* <Link to="mailto:air.reza@hotmail.com"><MailIcon /></Link> */}
                    <a href="mailto:air.reza@hotmail.com"><MailIcon /></a>
                </HeroProfile>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    padding: 0 calc((100vw - 1180px) / 2);
    margin-top: -64px;
    position: relative;
    border-bottom: solid 1px #457B9D;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 80px 16px 32px 16px;
`

const HeroBg = styled.div`
    display: flex;
    width: 33%;
    justify-content: center;
    overflow: hidden;
    margin-top: 96px;
    margin-bottom: 32px;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: center;
        overflow: hidden;
        margin-top: 8px;
        margin-bottom: 8px;
`

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 67%;
    margin-top: 96px;
    padding-left: 32px;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        margin-top: 8px;
        margin-bottom: 8px;
        padding: 0;
`

const HeroH1 = styled.h1`
    color: #264653;
    font-weight: 600;
    font-size: clamp(24px, 6vw, 64px);
    padding-top: 16px;

    @media screen and (max-width: 768px) {
        padding-top: 8px;
`

const HeroH2 = styled.h2`
    color: #2A9d8F;
    font-weight: 300;
    font-size: clamp(18px, 6vw, 32px);
    padding-top: 16px;

    @media screen and (max-width: 768px) {
        padding-top: 8px;
`

const IntroSpan = styled.span`
    color: #E76F51;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
`

const IntroP = styled.p`
    padding-top: 16px;
    color: #264653;
    font-size: 18px;
    line-height: 32px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
`

const HeroLink = styled(Link)`
    text-decoration: none;
    color: #E76F51;
`

const HeroProfile = styled.div`
    display: flex;
    padding-top: 32px;
`

const LinkedInIcon = styled(GrLinkedin)`
    color: #264653;
    background: none;
    font-size: 32px;
    margin-right: 16px;

    & :hover {
        filter: brightness(1.25);
        transform: scale(1.10);
        transition: ease-in-out 0.3s;
    }
`

const GithubIcon = styled(GrGithub)`
    color: #264653;
    font-size: 32px;
    background: none;
    margin-right: 16px;

    & :hover {
        filter: brightness(1.25);
        transform: scale(1.10);
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 768px) {
        margin-right: 16px;
`

const MediumIcon = styled(GrMedium)`
    color: #264653;
    font-size: 32px;
    background: none;
    margin-right: 24px;

    & :hover {
        filter: brightness(1.25);
        transform: scale(1.10);
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 768px) {
        margin-right: 16px;
`

const MailIcon = styled(GrMail)`
    color: #264653;
    font-size: 32px;
    background: none;

    & :hover {
        filter: brightness(1.25);
        transform: scale(1.10);
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 768px) {
        margin-right: 16px;
`

// const ContactCTA = styled.div`
//     background: #264653;
//     height: 32px;
//     padding: 0 16px;
//     font-size: 16px;
//     display: flex;
//     align-items: center;
//     color: #FFFFFF;
//     cursor: pointer;
//     margin-right: 64px;
    
//     & :hover {
//         filter: brightness(1.25);
//         transform: scale(1.10);
//         transition: ease-in-out 0.3s;
//     }

//     @media screen and (max-width: 768px) {
//         font-size: 12px;
//         margin-right: 16px;
// `