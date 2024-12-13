import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../assets/social.svg";

type ProjectsPropsType = {
    src: string;
    title: string;
    text: string;

}
export const Project = (props: ProjectsPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'column'}>
                <Image src={props.src}/>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Explanation><ExplanationBold>Tech Stack :</ExplanationBold> HTML, Javascript, SASS,
                        React</Explanation>
                    <FlexWrapper direction="row" justify="space-between">
                        <FlexWrapper alignItems="center" gap="5px">
                            <SvgIcon iconsHref={socialLogos} iconId={"link_chain"} size={'20px'} viewBox={"0 0 20 20"}/>
                            <Link href={"#"}>Live Preview</Link>
                        </FlexWrapper>
                        <FlexWrapper alignItems="center" gap="5px">
                            <SvgIcon iconsHref={socialLogos} iconId={'github_cat'} size={'20px'} viewBox={"0 0 30 30"}/>
                            <Link href={"#"}>View Code</Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </Description>
            </FlexWrapper>
        </StyledProject>
    );
};

const Description = styled.div`
    max-width: 314px;
    padding: 0 30px;
`

const StyledProject = styled.article`
    background-color: bisque;
    max-width: 374px;
    width: 100%;
    min-height: 570px;
    border-radius: 20px;
    padding-bottom: 25px;
`
const Title = styled.h3`
    font-size: 28px;
    margin-top: 26px;
    margin-bottom: 18px;
`
const Text = styled.p`
    font-size: 18px;

`
const Image = styled.img`
    height: 260px;
    width: 375px;
    object-fit: cover;
`
const Link = styled.a`
    color: black;
`
const Explanation = styled.p`
    font-size: 14px;
    margin-bottom: 21px;
    margin-top: 12px;
    font-weight: 400;
`
const ExplanationBold = styled.span`
    font-weight: 500;`
