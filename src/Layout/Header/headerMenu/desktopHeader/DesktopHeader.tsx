import React from 'react';
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {S} from "../Header_Styles"
import {SocialLinks} from "../../SocialLinks";
import {Menu} from "../menu/Menu";


type HeaderProps = {
    menuItems: Array<string>;
}

export const DesktopHeader: React.FC<{ menuItems: Array<string> }> = (props: HeaderProps) => {
    return (
        <S.HeaderMenu>
            <FlexWrapper gap="51px" alignItems="center">
                <S.HeaderNav>
                    <Menu menuItems={props.menuItems}/>
                </S.HeaderNav>
                <SocialLinks/>
            </FlexWrapper>
        </S.HeaderMenu>
    );
};

