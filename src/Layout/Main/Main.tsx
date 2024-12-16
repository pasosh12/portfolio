import React from 'react';
import styled from "styled-components";
import personPhoto from "../../assets/photo.jpg"
import {FlexWrapper} from "../../Components/FlexWrapper";
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";

export const Main = () => {
    return (
        <section id="main">
            <Container>
                <FlexWrapper alignItems={"center"} justify={"space-between"}>
                    <div>
                        <MainText>Hi,👋,<br/>
                            <p>My name is <br/>
                                <ColoredText fontSize={"58px"}> Daniil Shishaev</ColoredText>
                            </p>
                            <p>I build thing for web</p>
                        </MainText>
                    </div>
                    <Photo src={personPhoto}></Photo>
                </FlexWrapper>
            </Container>
        </section>
    );
};
const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 2px solid #e91e63;
    border-radius: 100%;
`
const MainText = styled.h2`
    font-size: 58px;
    //font-weight: bold;
    //font-family: var(--font-family);
    font-weight: 700;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #42446e;
`


