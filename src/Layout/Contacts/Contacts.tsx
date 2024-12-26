import React from 'react';
import {Container} from "../../Components/Container";
import {S} from './Contacts_Styles'
import styled from "styled-components";
import {theme} from "../../Styles/Theme";



export const Contacts:React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <S.FlexContainerContact>
                    <S.ContactsTitle>For any questions please mail me:</S.ContactsTitle>
                    <FormStyled>
                        <Field placeholder={'name'} />
                        <Field placeholder={'subject'}/>
                        <Field placeholder={'message'} as={'textarea'}/>
                        <button type="submit">Send message</button>
                    </FormStyled>
                </S.FlexContainerContact>
            </Container>
        </S.Contacts>
    );
};

const FormStyled=styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    margin : 0 auto;
    textarea {
        resize: none;
        height: 156px;
    }
`
const Field=styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.secondaryFont};

    &::placeholder {
        color: ${theme.colors.secondaryFont};
        text-transform: capitalize;
    }
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

