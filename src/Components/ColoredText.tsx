import styled from "styled-components";
type TextProps = {
    fontSize?: number | string;
    fontWeight?: string;
    start?: number | string;
    end?: number | string;
}
export const ColoredText = styled.span<TextProps>`
    //font-size: ${props => props.fontSize || "1em"};
    font-weight: ${props => props.fontWeight || "bold"};
    background: linear-gradient(90deg, ${props => props.start || '#13b0f5'} 2.6%, ${props => props.end || '#e70faa'} 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;

`