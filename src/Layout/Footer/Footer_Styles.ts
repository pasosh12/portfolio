import {theme} from "../../Styles/Theme";
import styled from "styled-components";

const Footer = styled.footer`
    max-width: 1194px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
`
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
    margin: 0 20px;
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
    
    @media ${theme.media.tablet} {
        display: none;
    }
`
const TopFooter = styled.div`
    margin-bottom: 40px;
    height: 100%;
`
const BottomFooter = styled.div`
    margin-bottom: 60px;
    margin-top: 45px;
    @media ${theme.media.tablet} {
        
    }
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
        transition : 0.3s ease-in-out;
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
export const S={
    Footer,
    Contacts,
    TopFooter,
    BottomFooter,
    Li,
    Ul,
    Text,
    FooterBottomNav,
    SocialItem,
    SocialMenu

}