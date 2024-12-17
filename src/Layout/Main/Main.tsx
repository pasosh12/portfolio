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
                    <PhotoContainer>
                        <Photo src={personPhoto}></Photo>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </section>
    );
};

const PhotoContainer = styled.div`
    background: linear-gradient(0deg, #13b0f5, #e70faa);
    padding: 10px;
    position: relative; display: inline-block; border-radius: 50%; overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 10px); 
        height: calc(100% + 10px); 
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

`
const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block; 
    border-radius: 50%;
    
`
const MainText = styled.h2`
    font-size: 58px;
    font-weight: 700;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #42446e;
`


