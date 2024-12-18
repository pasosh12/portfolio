import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../../assets/social.svg";
import styled from "styled-components";
import {theme} from "../../../Styles/Theme";

const StyledLi = styled.li`
    font-weight: 500;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;

    a {
        text-decoration: none;
        font-size: 20px;
        color: ${theme.colors.font};
    }
}
`
const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
`
const StyledHeaderMenu = styled.nav`
    @media ${theme.media.tablet} {
        display: none;
    }

}`
type HeaderProps = {
    menuItems: Array<string>;
    socialIcons: Array<string>;
}
export const HeaderMenu = (props: HeaderProps) => {
    return (
        <StyledHeaderMenu>
            <FlexWrapper gap="51px" alignItems="center">
                <StyledUl>
                    {props.menuItems.map((item, index) => (
                        <StyledLi key={index}>
                            <a href="#">{item}</a>
                        </StyledLi>
                    ))}
                </StyledUl>
                <FlexWrapper gap="20px" alignItems="center">
                    <StyledUl>
                        {props.socialIcons.map((item,index) => (
                            <StyledLi key={index}>
                                <a href={"#"}>
                                    <SvgIcon iconsHref={socialLogos} iconId={item} size={'30px'}
                                             viewBox={"0 0 30 30"}/>
                                </a>
                            </StyledLi>
                        ))}
                    </StyledUl>
                </FlexWrapper>
            </FlexWrapper>
        </StyledHeaderMenu>
    );
};

