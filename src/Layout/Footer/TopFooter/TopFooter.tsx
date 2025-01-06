import React from 'react';
import {Logo} from "../../../Components/Logo";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {S} from "../Footer_Styles"
import {SocialNavLinks} from "../../../Components/SocialNavLinks/SocialNavLinks";
import {ColoredText} from "../../../Components/ColoredText";

type FooterProps = {
    socialLinksArray: Array<string>;
}
export const TopFooter: React.FC<{ socialLinksArray: Array<string> }> = (props: FooterProps) => {
    return (
        <S.TopFooter>
            <S.NavFlex>
                <S.FooterLogo>
                    <Logo/>
                </S.FooterLogo>
                <S.Contacts as="a" href="tel:+375296010455">+375 29 601 04 55 </S.Contacts>
                <ColoredText as="a" href='mailto:daniil.shishaev@gmail.com'>daniil.shishaev@gmail.com</ColoredText>
                <FlexWrapper gap="20px" alignItems="center">
                    <S.SocialMenu>
                        <SocialNavLinks/>
                    </S.SocialMenu>
                </FlexWrapper>
            </S.NavFlex>
        </S.TopFooter>
    );
};