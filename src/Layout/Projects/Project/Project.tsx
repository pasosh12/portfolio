import React from 'react';
import {FlexWrapper} from "../../../Components/FlexWrapper";
import SvgIcon from "../../../Components/SvgIcon/SvgIcon";
import socialLogos from "../../../assets/projectsAssets/projects_social_Icons.svg";
import {Button} from "../../../Components/Button";
import {S} from './Project_Styles';

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
                                <SvgIcon iconsHref={socialLogos} iconId={"link_chain"} width={"20px"} height={"20px"}
                                         viewBox={"0 0 20 20"}/>
                                <span>Live Preview</span>
                            </FlexWrapper>
                        </S.Link>
                        <S.Link href={"#"}>
                            <FlexWrapper alignItems="center" gap="5px">
                                <SvgIcon iconsHref={socialLogos} iconId={'github_cat'} width={"20px"} height={"20px"}
                                         viewBox={"0 0 30 30"}/>
                                <span>View Code</span>
                            </FlexWrapper>
                        </S.Link>
                    </FlexWrapper>
                </S.Description>
            </FlexWrapper>
        </S.Project>
    );
};



