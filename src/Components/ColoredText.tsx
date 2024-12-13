import styled from "styled-components";
type TextProps = {
    fontSize?: number | string;
    fontWeight?: string;
}
export const ColoredText = styled.p<TextProps>`
    font-size: ${props=> props.fontSize || "48px"};
    font-weight: ${props=> props.fontWeight || "bold"};
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg, #e70faa 0%, #13b0f5 97.4%);

`