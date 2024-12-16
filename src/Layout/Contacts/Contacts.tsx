import React from 'react';
import styled from "styled-components";
import {ColoredText} from "../../Components/ColoredText";
import {SectionTitle} from "../../Components/SectionTitle";
import {Container} from "../../Components/Container";

const ContactsStyled = styled.section`
    min-height: 100%;
    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ContactsTitle = styled.h2`
    color: #1e0e62;
    font-weight: 700;
    font-size: 58px;
    //letter-spacing: -0.02em;
    text-align: center;
    margin: 0;
`
const FlexContainerContact = styled.div`
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-align: center;
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <Container>
                <FlexContainerContact>
                    <ContactsTitle>For any questions please mail me:</ContactsTitle>
                    <ColoredText as="a" href='#' fontSize={'58px'}>daniil.shishaev@gmail.com</ColoredText>
                </FlexContainerContact>
            </Container>
        </ContactsStyled>
    );
};

