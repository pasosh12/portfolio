import React from 'react';
import {Logo} from "../../../Components/Logo";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../../assets/social.svg";
import {S} from "../Footer_Styles"

type FooterProps = {
    socialLinksArray: Array<string>;
}
export const TopFooter: React.FC<{ socialLinksArray: Array<string> }> = (props: FooterProps) => {
    return (
        <FlexWrapper direction={'row'} alignItems={"center"} justify="space-between">
            <Logo/>
            <FlexWrapper gap='33px' direction={'row'} alignItems={"center"} justify="space-between">
                <S.Contacts as="a" href="tel:+375296010455">+375 29 601 04 55 </S.Contacts>
                <S.Contacts as="a" href="mailto:daniil.shishaev@gmail.com">daniil.shishaev@gmail.com</S.Contacts>
                <FlexWrapper gap="20px" alignItems="center">
                    {props.socialLinksArray.map((item, index) => (
                        <a href={"#"} key={index}>
                            <SvgIcon iconsHref={socialLogos} iconId={item} size={"30px"} viewBox={"0 0 30 30"}/>
                        </a>
                    ))}
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    );
};