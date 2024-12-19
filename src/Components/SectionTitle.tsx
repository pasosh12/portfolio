import styled from "styled-components";
import {font} from "../Styles/Common";
type SectionTitleProps = {
    fontSize?: string | number;
    justify?: string;
    margin?: string;
}
export const SectionTitle = styled.h2<SectionTitleProps>`
    color:#42446e;
    font-weight: bold;
    font-size:${font({Fmax: 48, Fmin: 26, weight: 700, color: "#42446e"})}
    // font-size: ${props=> props.fontSize || "48px"};
    display: flex;
    justify-content: ${props=> props.justify || "center"};
    margin: ${props=> props.margin || "0"} auto;
`