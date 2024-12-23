import {theme} from "../../Styles/Theme";
import styled from "styled-components";

const Footer = styled.footer`
    max-width: 1194px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    //border: 1px solid red;
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
`
export const S={
    Footer,
    Contacts,
    TopFooter,
    BottomFooter,
    Li,
    Ul,
    Text

}