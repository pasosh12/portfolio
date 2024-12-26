import {theme} from "../../Styles/Theme";
import styled from "styled-components";



const Footer = styled.footer`
    max-width: 1194px;
    min-width: 100%;
    min-height: 100%;
    margin: 0 auto;
    
`
const FooterLogo = styled.a`
    @media ${theme.media.tablet} {
        display: none;
    }`

const Ul = styled.ul`

    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`
const Text = styled.small`
    font-size: 18px;
    color: #666;
    font-weight: 400;
    padding: 0 20px;
`
const Li = styled.li`

    a {
        text-decoration: none;
        color: #666666;
        font-weight: 500;
        font-size: 20px;
        font-family: "DM Sans", sans-serif;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`
const Contacts = styled.span`
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #42446e;
`
const NavFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-Items: center;
    justify-content: space-between;
    //justify-content: flex-end;
    gap: 33px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`
const TopFooter = styled.div`
    margin-bottom: 30px;

`

const FooterBottomNav = styled.nav`

    ul {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    @media ${theme.media.tablet} {
        display: none;
    })
`
const SocialItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    height: 30px;
    font-family: "DM Sans", sans-serif;

    &:hover {
        transform: translateY(-5px);
        transition: 0.3s ease-in-out;
    }
`
const SocialMenu = styled.nav`
    list-style: none;

    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
    }
`
const BottomFooter = styled.div`
    margin-bottom: 60px;
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.tablet} {
        justify-content: center;
        text-align: center;
    }
    @media (max-width: 952px) {
        flex-direction: column;
        justify-content: center;
        gap: 20px
    }

`
export const S = {
    Footer,
    Contacts,
    TopFooter,
    BottomFooter,
    Li,
    Ul,
    Text,
    FooterBottomNav,
    SocialItem,
    SocialMenu,
    NavFlex,
    FooterLogo

}