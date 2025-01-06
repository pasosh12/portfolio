import React from 'react';
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {S} from "../Header_Styles"
import {SocialNavLinks} from "../../../../Components/SocialNavLinks/SocialNavLinks";
import {Menu} from "../menu/Menu";


export const DesktopHeader:React.FC = () => {
    return (
        <S.HeaderMenu>
            <FlexWrapper gap="51px" alignItems="center">
                <S.HeaderNav>
                    <Menu />
                </S.HeaderNav>
                <S.HeaderNav>
                    <SocialNavLinks/>
                </S.HeaderNav>
            </FlexWrapper>
        </S.HeaderMenu>
    );
};