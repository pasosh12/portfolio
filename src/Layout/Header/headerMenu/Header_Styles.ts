import styled, {css} from "styled-components";
import {theme} from "../../../Styles/Theme";
import {Link} from "react-scroll";

const Header = styled.header`
    padding: 41px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    @media ${theme.media.mobile} {
        padding: 20px 0 ;
    }
    //&::-webkit-scrollbar {
    //    overflow-y: scroll;
    //    background-color: rgba(0, 0, 0, 0.06);
    //
    //}
`


//Desktop
const HeaderMenu = styled.nav`
    list-style: none;
`
const HeaderNav = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
    }
`

// Mobile
const MobileMenu = styled.nav`
    list-style: none;
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -80px;
    @media ${theme.media.mobile} {
        top: -100px;
    }
    right: -100px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            width: 0;
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            position: absolute;
            transform: translateY(-10px);
            background-color: ${theme.colors.primaryFont};
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 26px;
            height: 2px;
            background-color: ${theme.colors.primaryFont};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.9);
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

// Menu
const ListItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;
    color: ${theme.colors.primaryFont};
    
    position: relative;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    
`
const NavLink = styled(Link)`
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: ${theme.colors.primaryFont};

    position: relative;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;

    &::after {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: ${theme.colors.primaryFont};
        content: '';
        transition: width 0.3s ease-out;
    }
    
    &:hover, &:focus, &.active, &.focus-visible {
        font-size: 25px;
    }

    &:hover::after, &:focus::after, &.active::after, &.focus-visible::after {
        width: 100%;
    }
`

//SocialLinks Component

const LogosUl = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
`
const SocialItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    height: 30px;
    font-family: "DM Sans", sans-serif;
`


export const S = {
    Header,

    HeaderMenu,
    HeaderNav,

    MobileMenu,
    MobileMenuPopup,
    BurgerButton,

    ListItem,
    NavLink,

    LogosUl,
    SocialItem
}