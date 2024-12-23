import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import {SectionTitle} from "../../Components/SectionTitle";
import iconsSprite from '../../assets/skills.svg';
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Fade} from "react-awesome-reveal";
import { S } from './Skills_Styles';

export const Skills = () => {
    const skillsArray = [
        "html5", "git", "github", "css", "react", "vscode", "saas", "tailwind", "greensock", "js", "bootstrap", "vector"]
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <S.GridContainer>
                    <Fade cascade={true} duration={200} delay={0}>
                        {skillsArray.map((skill, index) => (
                            <S.Skill key={index}>
                                <SvgIcon iconsHref={iconsSprite} iconId={skill} key={index} viewBox={""}/>
                            </S.Skill>
                        ))}
                    </Fade>
                </S.GridContainer>
            </Container>
        </S.Skills>
    );
};

