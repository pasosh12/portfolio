import React from 'react';
import {ColoredText} from "../../../Components/ColoredText";
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {S} from '../Footer_Styles';

type FooterProps = {
    linksArray: Array<string>;
}

export const BottomFooter: React.FC<{ linksArray: Array<string> }> = (props: FooterProps) => {
    return (
        <FlexWrapper justify={"space-between"} alignItems={"center"}>
            <nav>
                <S.Ul>
                    {props.linksArray.map((item, index) => (
                        <S.Li key={index}>
                            <a href="#">{item}</a>
                        </S.Li>
                    ))}
                </S.Ul>
            </nav>
            <S.Text>
                Designed and built by
                <ColoredText fontSize="18" fontWeight="400" start='#7864D2' end='#9E46C4'> Pavan
                    MG </ColoredText>
                with
                <ColoredText fontSize="18" fontWeight="400" start='#B733BB' end='#C529B6'> Love </ColoredText>
                &
                <ColoredText fontSize="18" fontWeight="400" start='#D120B2' end='#E70FAA'> Coffee </ColoredText>
            </S.Text>
        </FlexWrapper>
    );
};