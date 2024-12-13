import styled from "styled-components";
type SectionTitleSecondProps = {
    fontSize?: string | number;
    justify?: string;
}
export const SectionTitleSecond = styled.h3<SectionTitleSecondProps>`
    color:#666;
    font-weight: bold;
    font-size: ${props=> props.fontSize || "32px"};
    display: flex;
    justify-content: ${props=> props.justify || "center"};
    margin-bottom: 120px;
    margin-top: 50px;
`