import styled from "styled-components";
import {theme} from "../../../Styles/Theme";
import {Button} from "../../../Components/Button";
import {font} from "../../../Styles/Common";


//Projects
const Projects = styled.section`
`

//Project
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
const Project = styled.article`
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
    margin-bottom: 18px;
    margin-top: 26px;
    ${font({Fmax: 28, Fmin: 20, weight: 500, color: `${theme.colors.accent}`})}
`
const Text = styled.p`
    line-height: 1.4;
    ${font({Fmax: 18, Fmin: 14, weight: 300, color: `${theme.colors.primaryFont}`})}
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
    color: ${theme.colors.accent};
    position: relative;

    &:hover{
        scale: 1.1;
    }
`
const Explanation = styled.p`
    margin-bottom: 21px;
    margin-top: 12px;
    ${font({Fmax: 14, Fmin: 10, weight: 400, color: `${theme.colors.primaryFont}`})}
`
const ExplanationBold = styled.span`
    ${font({Fmax: 14, Fmin: 10, weight: 500, color: `${theme.colors.primaryFont}`})}
`

export const S ={
    Projects,
    ImageWrapper,
    Description,
    Project,
    Title,
    Text,
    Image,
    Link,
    Explanation,
    ExplanationBold
}