import aboutDrawing from "../../assets/aboutDrawing.svg"
import styled from "styled-components";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const About=styled.section`
    overflow-x: clip;
`
const AboutColumn = styled.div`
    max-width: 710px;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        background-size: contain;
        background-image: url(${aboutDrawing});
        width: 834px;
        height: 834px;
        bottom: -15%;
        left: 100%;        
    }

    @media (max-width: 1600px) {
        &::before {
            display: none;
        }
    }
`
const Text = styled.p`
    margin: 38px auto;
    font-size:${font({Fmax: 18, Fmin: 14, color: `${theme.colors.primaryFont}`})};
`

export const S={
    About,
    AboutColumn,
    Text,
}