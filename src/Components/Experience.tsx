import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";

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
    color: #666666;
    font-size: 20px;
    font-weight: 400;
`
const TextStyled = styled.p`
    color:#a7a7a7;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
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