import React from 'react';
import personPhoto from "../../assets/profilePhoto/photo.jpg"
import {FlexWrapper} from "../../Components/FlexWrapper";
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";
import Tilt from 'react-parallax-tilt'
import Typewriter from 'typewriter-effect';
import { S } from './Main_Styles';


export const Main:React.FC = () => {
    return (
        <S.MainComponent id={'home'}>
            <Container>
                <FlexWrapper alignItems={"flex-start"} justify={"space-between"}>
                    <S.Container>
                        <S.MainText>Hi,👋,<br/>
                            My name is <br/>
                            <ColoredText> Daniil Shishaev</ColoredText>
                            <br/>
                            <p>A Frontend Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['I build thing for web', 'A Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainText>
                    </S.Container>
                    <Tilt className="background-stripes parallax-effect-glare-scale"
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}>
                        <S.PhotoContainer>
                            <S.Photo src={personPhoto} alt={'me_photo'}></S.Photo>
                        </S.PhotoContainer>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.MainComponent>
    );
};



