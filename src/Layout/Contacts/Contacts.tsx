import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import logo from "../../assets/logo.svg"
import socialLogos from "../../assets/social.svg";
import {FlexWrapper} from "../../Components/FlexWrapper";
import styled from "styled-components";
import {ColoredText} from "../../Components/ColoredText";
import {SectionTitle} from "../../Components/SectionTitle";

export const Contacts = () => {
    return (
        <ContactsStyled>
            <FlexContainerContact >
                <SectionTitle fontSize={"58px"}>For any questions please mail me:</SectionTitle>
                <ColoredText fontSize={'58px'}>daniil.shishaev@gmail.com</ColoredText>
            </FlexContainerContact>
            <FlexWrapper direction={'row'} alignItems={"center"} justify="space-between">
                <img src={logo}/>
                <p>+91 123456 0876</p>
                <p>info@example.com</p>
                <FlexWrapper gap="20px" alignItems="center">
                    <a href={"#"}>
                        <SvgIcon iconsHref={socialLogos} iconId={"github_cat"} size={"31px"} viewBox={"0 0 30 30"}/>
                    </a>
                    <a href={"#"}>
                        <SvgIcon iconsHref={socialLogos} iconId={"twitter"} size={"31px"} viewBox={"0 0 30 30"}/>
                    </a>
                    <a href={"#"}>
                        <SvgIcon iconsHref={socialLogos} iconId={"linkedin"} size={"31px"} viewBox={"0 0 30 30"}    />
                    </a>
                </FlexWrapper>
            </FlexWrapper>
        </ContactsStyled>
    );
};
const FlexContainerContact = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    min-height: 90%;
`
const ContactsStyled = styled.section`
    background-color: #f1abab;
    height: 767px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
