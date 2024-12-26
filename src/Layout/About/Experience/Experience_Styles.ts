import {font} from "../../../Styles/Common";
import styled from "styled-components";
import {theme} from "../../../Styles/Theme";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    row-gap: 10px;
`
const ExperienceStyled = styled.div`
    row-gap: 10px;
    padding: 20px 0;
`
const TitleStyled = styled.h3`
    font-weight: 400;
    font-size: ${font({Fmax: 20, Fmin: 14, weight: 400, color: `${theme.colors.primaryFont}`})};
`
const DateText = styled.p<{ align?: string }>`
    font-size: ${font({Fmax: 12, Fmin: 10, weight: 500, color: `#a7a7a7`})};
    text-align: ${(props) => props.align || "right"};
`
const TextStyled = styled.p<{ align?: string }>`
    letter-spacing: 0.08em;
    display: flex;
    gap: 8px;
    font-size: ${font({Fmax: 12, Fmin: 10, weight: 500, color: `#a7a7a7`})};
    text-align: ${(props: { align?: string }) => props.align || "left"};

`
const ExperienceTypeStyled = styled.button`
    background-color: #d7ffe0;
    border-color: transparent;
    max-height: 24px;
    border-radius: 20px;
    font-size: 9px;
    font-weight: 600;
    color: #018c0f;
    text-align: right;
    display: inline-block;
    padding: 2px 8px;
    justify-self: end;
`
const GridWrapper = styled.div`
    display: contents;
`
export const S ={
    GridContainer,
    ExperienceStyled,
    TitleStyled,
    DateText,
    TextStyled,
    ExperienceTypeStyled,
    GridWrapper
}