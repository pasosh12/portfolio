import styled from "styled-components";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const Contacts = styled.section`
    padding: 200px 0;
`
const ContactsTitle = styled.h2`
    ${font({Fmax: 58, Fmin: 26, color: "#1e0e62", weight: 700})};
    text-align: center;
    margin: 0;
`
const FlexContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:90px;
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-align: center;
    ${font({Fmax: 58, Fmin: 26})};
    @media ${theme.media.tablet} {
        a, h2 {
            margin-bottom: 20px;
        }
    }
`
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
    border-radius: 10px;
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
export const S = {
    Contacts,
    ContactsTitle,
    FlexContainerContact,
    FormStyled,
    Field
}