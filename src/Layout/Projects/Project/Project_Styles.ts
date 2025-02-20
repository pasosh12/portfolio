import styled from "styled-components";
import {theme} from "../../../Styles/Theme";
import {StyledButton} from "../../../Components/Button_Styled";
import {font} from "../../../Styles/Common";


//Projects
const Projects = styled.section`
    position: relative;
`

//Project
const ImageWrapper = styled.div`
    position: relative;

    ${StyledButton} {
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

    // shading

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

        ${StyledButton} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }
}
`
const Description = styled.div`
    padding: 0 30px;

`
const Project = styled.article`
    width: 320px;
    flex-grow: 1;
    border-radius: 20px;
    padding-bottom: 25px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    transition: ${theme.animations.transition};
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 817px) {
        min-width: 100%;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    @media ${theme.media.mobile} {
        width: 360px;
    }

    @media ${theme.media.mobile} {
        width: 100%; /* Адаптивная ширина на мобильных устройствах */
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
    transition: ${theme.animations.transition};

    span {
        ${font({Fmax: 16, Fmin: 12, weight: 400, color: `${theme.colors.accent}`})
        }
        &:hover {
            transform: scale(1.1);
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

export const S = {
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