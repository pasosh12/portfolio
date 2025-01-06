import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import {Button} from "../../../Components/Button";
import {S} from './Project_Styles';
import {ProjectsIcons} from '../../../assets/projectsAssets/Projects_Social_Icons'

type ProjectsPropsType = {
    src: string;
    title: string;
    text: string;

}

export const Project = (props: ProjectsPropsType) => {
    return (
        <S.Project>
            <FlexWrapper direction={'column'}>
                <S.ImageWrapper>
                    <S.Image src={props.src} alt='cool picture'/>
                        <Button>View project</Button>
                </S.ImageWrapper>
                <S.Description>
                    <S.Title>{props.title}</S.Title>
                    <S.Text>{props.text}</S.Text>
                    <S.Explanation>
                        <S.ExplanationBold>Tech Stack : </S.ExplanationBold>
                        HTML, Javascript, SASS, React
                    </S.Explanation>
                    <FlexWrapper direction="row" justify="space-between">
                        <S.Link href={"#"}>
                            <FlexWrapper alignItems="center" gap="5px">
                                <ProjectsIcons.Chain/>
                                <span>Live Preview</span>
                            </FlexWrapper>
                        </S.Link>
                        <S.Link href={"#"}>
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



