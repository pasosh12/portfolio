import styled from "styled-components";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const MainComponent = styled.section`
    margin-top: 50px;
`
const PhotoContainer = styled.div`
    background: linear-gradient(0deg, #13b0f5, #e70faa);
    padding: 10px;
    position: relative;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        border-radius: 50%;
        z-index: -1;
    }

    @media ${theme.media.mobile} {
        padding: 5px;
        &::before {
            display: none;
        }

`
const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block;
    border-radius: 50%;
    @media ${theme.media.mobile} {
        width: 150px;
        height: 150px;
    }

`
const MainText = styled.h2`
    position: relative;
    //display: flex;
    //align-items: center;
    ${font({Fmax: 58, Fmin: 26, weight: 700, color: `${theme.colors.secondaryFont}`})}
    letter-spacing: -0.02em;
    p{
        display: none;
    }
    @media ${theme.media.mobile} {
        padding-right: 10px;
    }
`
const TypingText = styled.div`
    position: absolute;
`
const Container = styled.div`
    min-height: 190px;
`
export const S={
    MainComponent,
    PhotoContainer,
    Photo,
    MainText,
    TypingText,
    Container
}