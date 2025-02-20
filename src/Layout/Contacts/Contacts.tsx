import React, {ElementRef, useRef} from 'react';
import {Container} from "../../Components/Container";
import {S} from './Contacts_Styles'
import emailjs from '@emailjs/browser';
import {StyledButton} from "../../Components/Button_Styled";
import {theme} from "../../Styles/Theme";
import {toast, ToastContainer} from "react-toastify";


export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_oyu3ap9', 'template_zahqhxc', form.current, {
                publicKey: '8mBwN5OMcovscWQja'
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Message was NOT sent :( Please try again later.');
                },
            );
        e.target.reset();
    };
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <S.FlexContainerContact>
                    <S.ContactsTitle>For any questions please mail me:</S.ContactsTitle>
                    <S.FormStyled ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'name'} name={'user_name'}/>
                        <S.Field required placeholder={'e-mail'} name={'email'}/>
                        <S.Field required placeholder={'subject'} name={'subject'}/>
                        <S.Field required placeholder={'message'} as={'textarea'} name={'message'}/>
                        <StyledButton borderColor={theme.colors.borderColor} type="submit">Send message</StyledButton>
                    </S.FormStyled>
                </S.FlexContainerContact>
                <ToastContainer/>
            </Container>
        </S.Contacts>
    );
}


