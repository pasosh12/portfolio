import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../assets/social.svg"
import {S} from './headerMenu/Header_Styles'


const socialIconsArray = ["github_cat", "twitter", "linkedin"]

export const SocialLinks = () => {
    return (
        <S.LogosUl>
            {socialIconsArray.map((item, index) => (
                <S.SocialItem key={index}>
                    <a href={"#"}>
                        <SvgIcon iconsHref={socialLogos} iconId={item} size={'30px'}
                                 viewBox={"0 0 30 30"}/>
                    </a>
                </S.SocialItem>
            ))}
        </S.LogosUl>
    );
};
