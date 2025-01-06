import React from 'react';
import {S} from './Experience_Styles';
import {Ico} from "../../../assets/aboutAssets/Small_Icons";

type ExperienceProps = {
    title: string | "";
    company: string | "";
    experienceDate?: string | "";
    experienceType?: string | "";
    location?: string | "";
    time?: string | "";
}

export const Experience = (props: ExperienceProps) => {
    return (
        <S.ExperienceStyled>
            <S.GridContainer>
                <S.GridWrapper>
                    <S.TitleStyled>{props.title}</S.TitleStyled>
                    {/*//for grid positioning*/}
                    <div></div>
                    <S.ExperienceTypeStyled>{props.experienceType}</S.ExperienceTypeStyled>
                </S.GridWrapper>
                <S.GridWrapper>
                    {props.company ? (
                        <S.SmallContent>
                            <Ico.Building/>
                            <S.TextStyled>{props.company}</S.TextStyled>
                        </S.SmallContent>
                    ) : <div></div>
                    }
                    {props.location ? (
                        <S.SmallContent>
                            <Ico.Location/>
                            <S.TextStyled>{props.location}</S.TextStyled>
                        </S.SmallContent>
                    ) : <div></div>
                    }
                    {props.experienceDate ? (
                        <S.SmallContent justify={'flex-end'}>
                            <Ico.Calendar/>
                            <S.DateText>{props.experienceDate}</S.DateText>
                        </S.SmallContent>
                    ) : <div></div>
                    }
                </S.GridWrapper>
            </S.GridContainer>
            <hr/>
        </S.ExperienceStyled>
    );
};
