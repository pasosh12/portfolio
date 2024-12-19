import React from 'react';
import styled from "styled-components";
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const ContactsStyled = styled.section`
    //min-height: 100%;
    //height: 335px;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
    margin-bottom: 100px;
`
const ContactsTitle = styled.h2`
    color: #1e0e62;
    font-weight: 700;
    ${font({Fmax: 58, Fmin: 26,color: "#1e0e62",weight:700})};
    //letter-spacing: -0.02em;
    text-align: center;
    margin: 0;
`
const FlexContainerContact = styled.div`
    //display: grid;
    //grid-template-rows: 1fr 1fr 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-align: center;
    font-size: 26px;
    ${font({Fmax: 58, Fmin: 26})};
    @media ${theme.media.tablet} {
        a, h2 {
            margin-bottom: 20px;
            //font-size: 26px;
        }
    }
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <Container>
                <FlexContainerContact>
                    <ContactsTitle>For any questions please mail me:</ContactsTitle>
                    <ColoredText as="a" href='#'>daniil.shishaev@gmail.com</ColoredText>
                </FlexContainerContact>
            </Container>
        </ContactsStyled>
    );
};

