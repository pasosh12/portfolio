import React from 'react';
import styled from "styled-components";
import {ColoredText} from "../../Components/ColoredText";
import {SectionTitle} from "../../Components/SectionTitle";
import {Container} from "../../Components/Container";

const ContactsStyled = styled.section`
    min-height: 100%;
    height: 658px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FlexContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <Container>
                <FlexContainerContact>
                    <SectionTitle fontSize={"58px"}>For any questions please mail me:</SectionTitle>
                    <ColoredText as={"a"} fontSize={'58px'}>daniil.shishaev@gmail.com</ColoredText>
                </FlexContainerContact>
            </Container>
        </ContactsStyled>
    );
};

