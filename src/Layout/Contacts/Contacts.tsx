import React from 'react';
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";
import {S} from './Contacts_Styles'



export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <S.FlexContainerContact>
                    <S.ContactsTitle>For any questions please mail me:</S.ContactsTitle>
                    <ColoredText as="a" href='#'>daniil.shishaev@gmail.com</ColoredText>
                </S.FlexContainerContact>
            </Container>
        </S.Contacts>
    );
};

