import styled from "styled-components";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const Contacts = styled.section`
    margin-bottom: 100px;
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

export const S = {
    Contacts,
    ContactsTitle,
    FlexContainerContact
}