import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../Styles/Theme";


type HeaderProps = {
    menuItems: Array<string>;
    // socialIcons: Array<string>;
}
const StyledLi = styled.li`
    font-weight: 500;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;

    a {
        font-size: 50px;
        color: ${theme.colors.primaryFont};
    }
`

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
}`

const BurgerButton = styled.button<{isOpen:boolean}>`
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
const MobileMenuPopup = styled.div<{isOpen:boolean}>`
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
export const MobileHeaderMenu = (props: HeaderProps) => {
    const [menuIsOpened, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick=()=>{
        setMenuIsOpen(!menuIsOpened)
    }
    return (
        <StyledMobileMenu>
            <BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpened}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpened} onClick={()=>{setMenuIsOpen(false)}}>
                <ul>
                    {props.menuItems.map((item, index) => (
                        <StyledLi key={index}>
                            <a href="#" >{item}</a>
                        </StyledLi>
                    ))}
                </ul>

            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

