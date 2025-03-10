import React from 'react';
import {S} from "./Skill_Styles";
import {Icon} from "../../../Components/IconComponent/IconComponent";


type SkillPropsType = {
    icon: React.ComponentType,
    title: string,
    size: string,
    color: string,

}
export const Skill: React.FC<SkillPropsType> = props => {
    const {title, icon, size, color} = props

    return (
        <S.Skill>
            <Icon icon={icon} size={size} color={color}/>
            <S.Title>{title}</S.Title>
        </S.Skill>

    );
};