import styled from "styled-components";
import {font} from "../Styles/Common";
import { theme } from "../Styles/Theme";
type SectionTitleSecondProps = {
    fontSize?: string | number;
    justify?: string;
}
export const SectionTitleSecond = styled.h3<SectionTitleSecondProps>`
    color:#666;
    font-weight: bold;
    font-size:${font({Fmax: 32, Fmin: 20, color: `${theme.colors.primaryFont}`})}
    // font-size: ${props=> props.fontSize || "32px"};
    display: flex;
    justify-content: ${props=> props.justify || "center"};
    margin-bottom: 120px;
    margin-top: 50px;
`