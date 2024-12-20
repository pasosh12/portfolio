import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../assets/social.svg";
import {theme} from "../../Styles/Theme";
import {font} from "../../Styles/Common";
import {Button} from "../../Components/Button";

type ProjectsPropsType = {
    src: string;
    title: string;
    text: string;

}
export const Project = (props: ProjectsPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'column'}>
                <ImageWrapper>
                    <Image src={props.src} alt='cool picture'/>
                    <Button>View project</Button>
                </ImageWrapper>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Explanation>
                        <ExplanationBold>Tech Stack : </ExplanationBold>
                        HTML, Javascript, SASS, React
                    </Explanation>
                    <FlexWrapper direction="row" justify="space-between">
                        <FlexWrapper alignItems="center" gap="5px">
                            <SvgIcon iconsHref={socialLogos} iconId={"link_chain"} size={'20px'} viewBox={"0 0 20 20"}/>
                            <Link href={"#"}>Live Preview</Link>
                        </FlexWrapper>
                        <FlexWrapper alignItems="center" gap="5px">
                            <SvgIcon iconsHref={socialLogos} iconId={'github_cat'} size={'20px'}
                                     viewBox={"0 0 30 30"}/>
                            <Link href={"#"}>View Code </Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </Description>
            </FlexWrapper>
        </StyledProject>
    )
        ;
};

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 5px;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
        border-radius: 20px 20px 0 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
}
`
const Description = styled.div`
    max-width: 314px;
    padding: 0 30px;
`
const StyledProject = styled.article`
    max-width: 375px;
    width: 100%;
    min-height: 570px;
    border-radius: 20px;
    padding-bottom: 25px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #fff;

    &:hover {
        transform: scale(1.05);
    }

    @media ${theme.media.mobile} {
        width: 360px;
    }
`
const Title = styled.h3`
    font-size: 28px;
    margin-top: 26px;
    margin-bottom: 18px;
    font-weight: 500;
    color: #000;
`
const Text = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #666;
    line-height: 1.4;
`
const Image = styled.img`
    height: 260px;
    width: 375px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 360px;
    }
`

const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #000;
`
const Explanation = styled.p`
    margin-bottom: 21px;
    margin-top: 12px;
    ${font({Fmax: 14, Fmin: 10, weight: 400, color: `${theme.colors.primaryFont}`})}
`
const ExplanationBold = styled.span`
    ${font({Fmax: 14, Fmin: 10, weight: 500, color: `${theme.colors.primaryFont}`})}
`

