import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../assets/socialAssets/social_icons_sprite.svg"
import {S} from './headerMenu/Header_Styles'


const socialIconsArray = [
    {iconId:"github_cat" , href:'https://github.com/pasosh12'},
    {iconId:"telegram", href:'https://t.me/beer_cats'},
    {iconId:"linkedin", href:'https://www.linkedin.com/in/daniil-shishaev-1a949021b/'}]

export const SocialLinks = () => {
    return (
        <S.LogosUl >
            {socialIconsArray.map((item, index) => (
                <S.SocialItem key={index}>
                    <a href={item.href} target={'_blank'}>
                        <SvgIcon iconsHref={socialLogos} iconId={item.iconId} height={'30px'} width={'30px'}
                                 viewBox={"0 0 30 30"}/>
                    </a>
                </S.SocialItem>
            ))}
        </S.LogosUl>
    );
};
