import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {font} from "../Styles/Common";
import {theme} from "../Styles/Theme";

type ExperienceProps = {
    title: string | "";
    company: string | "";
    experienceDate?: string | "";
    experienceType?: string | "";
    location?: string | "";
}

export const Experience = (props: ExperienceProps) => {
    return (
        <ExperienceStyled>
            <FlexWrapper direction={'row'} justify="space-between" alignItems={"center"}>
                <TitleStyled>{props.title}</TitleStyled>
                <ExperienceTypeStyled>{props.experienceType}</ExperienceTypeStyled>
            </FlexWrapper>
            <FlexWrapper direction={'row'} justify="space-between" alignItems={"center"}>
                <TextStyled>{props.company}</TextStyled>
                <TextStyled>{props.location}</TextStyled>
                <TextStyled>{props.experienceDate}</TextStyled>
            </FlexWrapper>

            <hr/>
        </ExperienceStyled>
    );
};

const ExperienceStyled = styled.div`
    margin-top: 30px;
`
const TitleStyled = styled.h3`
    font-weight: 400;
    font-size:${font({Fmax: 20, Fmin: 14, weight:400, color: `${theme.colors.primaryFont}`})};
`
const TextStyled = styled.p`
    color:#a7a7a7;
    font-weight: 500;
    letter-spacing: 0.08em;
    font-size:${font({Fmax: 12, Fmin: 10, weight:500, color: `#a7a7a7`})};
`
const ExperienceTypeStyled= styled.button`
    background-color: #d7ffe0;
    border-color: transparent;
    max-width: 84px;
    max-height: 24px;
    border-radius: 20px;
    font-size: 9px;
    text-align: center;
    font-weight: 600;
    color: #018c0f;
`