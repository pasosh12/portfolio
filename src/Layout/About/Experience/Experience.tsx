import React from 'react';
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import small_Icons from "../../../assets/aboutAssets/small_Icons_sprite.svg"
import {S} from './Experience_Styles';

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
                            <SvgIcon iconsHref={small_Icons} iconId={'location'} width={"12px"} height={"12px"}
                                     viewBox={"0 0 12 12"}/>
                            <S.TextStyled>{props.company}</S.TextStyled>
                        </S.SmallContent>
                    ) : <div></div>
                    }
                    {props.location ? (
                        <S.SmallContent>
                            <SvgIcon iconsHref={small_Icons} iconId={'building'} width={"12px"} height={"12px"}
                                     viewBox={"0 0 12 12"}/>
                            <S.TextStyled>{props.location}</S.TextStyled>
                        </S.SmallContent>
                    ) : <div></div>
                    }
                    {props.experienceDate ? (
                        <S.SmallContent justify={'flex-end'}>
                            <SvgIcon iconsHref={small_Icons} iconId={'time'} width={"12px"} height={"12px"}
                                     viewBox={"0 0 14 12"}/>
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
