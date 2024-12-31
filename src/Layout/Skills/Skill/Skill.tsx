import React from 'react';
import {S} from "./Skill_Styles";
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import iconsSprite from "../../../assets/skills.svg";

type SkillPropsType={
    iconId: string,
    viewBox: string,
    key: number
    height?: number | string,
    width?: number | string,
}
export const Skill = (props:SkillPropsType) => {
    return (
                <S.Skill key={props.key}>
                    <SvgIcon iconsHref={iconsSprite} iconId={props.iconId}  viewBox={props.viewBox}/>
                </S.Skill>

    );
};