import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../assets/social.svg";
import {ColoredText} from "../../Components/ColoredText";
import {Logo} from "../../Components/Logo";
import {theme} from "../../Styles/Theme";

const FooterStyled = styled.footer`
    max-width: 1194px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    //border: 1px solid red;
`
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`
const StyledText = styled.small`
    font-size: 18px;
    color: #666;
    font-weight: 400;
    margin: 0 20px;
`
const StyledLi = styled.li`
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
const TopFooterStyled = styled.div`
    margin-bottom: 40px;
    height: 100%;
`
const BottomFooterStyled = styled.div`
    margin-bottom: 60px;
    margin-top: 45px;
`

export const Footer = () => {
    const linksArray = ["Home", "About", "Technologies", "Projects", "Contacts"]
    const socialLinksArray = ["github_cat", "twitter", "linkedin"]
    return (
        <FooterStyled>
            <TopFooterStyled>
                <FlexWrapper direction={'row'} alignItems={"center"} justify="space-between">
                    <Logo/>
                    <FlexWrapper gap='33px' direction={'row'} alignItems={"center"} justify="space-between">
                        <Contacts as="a" href="tel:+375296010455">+375 29 601 04 55 </Contacts>
                        <Contacts as="a" href="mailto:daniil.shishaev@gmail.com">daniil.shishaev@gmail.com</Contacts>
                        <FlexWrapper gap="20px" alignItems="center">
                            {socialLinksArray.map((item, index) => (
                                <a href={"#"} key={index}>
                                    <SvgIcon iconsHref={socialLogos} iconId={item} size={"30px"} viewBox={"0 0 30 30"}/>
                                </a>
                            ))}
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </TopFooterStyled>
            <hr/>
            <BottomFooterStyled>
                <FlexWrapper justify={"space-between"} alignItems={"center"}>
                    <nav>
                        <StyledUl>
                            {linksArray.map((item, index) => (
                                <StyledLi key={index}>
                                    <a href="#">{item}</a>
                                </StyledLi>
                            ))}
                        </StyledUl>
                    </nav>
                    <StyledText>
                        Designed and built by
                        <ColoredText fontSize="18" fontWeight="400" start='#7864D2' end='#9E46C4'> Pavan
                            MG </ColoredText>
                        with
                        <ColoredText fontSize="18" fontWeight="400" start='#B733BB' end='#C529B6'> Love </ColoredText>
                        &
                        <ColoredText fontSize="18" fontWeight="400" start='#D120B2' end='#E70FAA'> Coffee </ColoredText>
                    </StyledText>
                </FlexWrapper>
            </BottomFooterStyled>
        </FooterStyled>
    )
        ;
};


