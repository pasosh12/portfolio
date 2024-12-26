import React, {ElementRef, useRef} from 'react';
import {Container} from "../../Components/Container";
import {S} from './Contacts_Styles'
import emailjs from '@emailjs/browser';


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
                },
                (error) => {
                    console.log('FAILED...', error.text);
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
                        <button type="submit">Send message</button>
                    </S.FormStyled>
                </S.FlexContainerContact>
            </Container>
        </S.Contacts>
    );
}


