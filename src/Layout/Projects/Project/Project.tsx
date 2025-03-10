import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {StyledButton} from "../../../Components/Button_Styled";
import {S} from './Project_Styles';
import {ProjectsIcons} from '../../../assets/projectsAssets/Projects_Social_Icons'

type ProjectsPropsType = {
    img: string,
    title: string,
    text: string,
    livePreviewURL: string,
    viewCodeURL: string,
    technologies: string
}

export const Project = (props: ProjectsPropsType) => {
    return (
        <S.Project>
            <FlexWrapper direction={'column'}>
                <S.ImageWrapper>
                    <S.Image loading={'lazy'} src={props.img} alt={props.title}/>
                    <StyledButton>
                        <a href={props.livePreviewURL || "#"}
                           target={props.livePreviewURL ? "_blank" : "_self"}>
                            View project
                        </a>
                    </StyledButton>
                </S.ImageWrapper>
                <S.Description>
                    <S.Title>{props.title}</S.Title>
                    <S.Text>{props.text}</S.Text>
                    <S.Explanation>
                        <S.ExplanationBold>Tech Stack : </S.ExplanationBold>
                        {props.technologies || "HTML, Javascript, SASS, React"}
                    </S.Explanation>
                    <FlexWrapper direction="row" justify="space-between">
                        <S.Link href={props.livePreviewURL || "#"}
                                target={props.livePreviewURL ? "_blank" : "_self"}>
                            <FlexWrapper alignItems="center" gap="5px">
                                <ProjectsIcons.Chain/>
                                <span>Live Preview</span>
                            </FlexWrapper>
                        </S.Link>
                        <S.Link href={props.viewCodeURL || "#"}
                                target={props.viewCodeURL ? "_blank" : "_self"}>
                            <FlexWrapper alignItems="center" gap="5px">
                                <ProjectsIcons.Github_Cat/>
                                <span>View Code</span>
                            </FlexWrapper>
                        </S.Link>
                    </FlexWrapper>
                </S.Description>
            </FlexWrapper>
        </S.Project>
    );
};



