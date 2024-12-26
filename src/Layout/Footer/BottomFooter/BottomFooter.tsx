import React from 'react';
import {ColoredText} from "../../../Components/ColoredText";
import {S} from '../Footer_Styles';
import {Menu} from "../../Header/headerMenu/menu/Menu";

type FooterProps = {
    linksArray: Array<string>;
}

export const BottomFooter: React.FC<{ linksArray: Array<string> }> = (props: FooterProps) => {
    return (
        <S.BottomFooter>
            <S.FooterBottomNav>
                <Menu/>
            </S.FooterBottomNav>
            <S.Text>
                Designed and built by
                <ColoredText fontSize="18" fontWeight="400" start='#7864D2' end='#9E46C4'> Pavan
                    MG </ColoredText>
                with
                <ColoredText fontSize="18" fontWeight="400" start='#B733BB' end='#C529B6'> Love </ColoredText>
                &
                <ColoredText fontSize="18" fontWeight="400" start='#D120B2' end='#E70FAA'> Coffee </ColoredText>
            </S.Text>
        </S.BottomFooter>
    );
};
