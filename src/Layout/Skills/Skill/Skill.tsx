import React from 'react';
import {S} from "../Skills_Styles";
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import iconsSprite from "../../../assets/skills.svg";

type SkillPropsType={
    title: string
    key: number
}
export const Skill = (props:SkillPropsType) => {
    return (
                <S.Skill key={props.key}>
                    <SvgIcon iconsHref={iconsSprite} iconId={props.title} viewBox={""}/>
                </S.Skill>

    );
};