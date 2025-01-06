import React from 'react';
import {S} from '../../Layout/Header/headerMenu/Header_Styles'
import {Icon} from "../IconComponent/IconComponent";
import {RiGithubFill, RiLinkedinBoxFill, RiTelegramFill} from 'react-icons/ri'
import {theme} from "../../Styles/Theme";

const socialObj = {
    github: {href: 'https://github.com/pasosh12'},
    telegram: {href: 'https://t.me/beer_cats'},
    linkedin: {href: 'https://www.linkedin.com/in/daniil-shishaev-1a949021b/'}
}
export const SocialNavLinks = () => {
    return (
        <S.LogosUl>
            <S.SocialItem>
                <a href={socialObj.github.href} target={'_blank'}>
                    <Icon icon={RiGithubFill} size={'30px'} color={theme.colors.primaryFont}/>
                </a>
            </S.SocialItem>
            <S.SocialItem>
                <a href={socialObj.telegram.href} target={'_blank'}>
                    <Icon icon={RiTelegramFill} size={'30px'} color={theme.colors.primaryFont}/>
                </a>
            </S.SocialItem>
            <S.SocialItem>
                <a href={socialObj.linkedin.href} target={'_blank'}>
                    <Icon icon={RiLinkedinBoxFill} size={'30px'} color={theme.colors.primaryFont}/>
                </a>
            </S.SocialItem>
        </S.LogosUl>
    );
};

