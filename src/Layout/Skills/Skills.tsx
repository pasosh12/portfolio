import React from 'react';
import {SectionTitle} from "../../Components/SectionTitle";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Fade} from "react-awesome-reveal";
import {S} from './Skills_Styles';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const skillsData = [
        {title: "html5", width: 94, height: 106},
        {title: "git", width: 106, height: 106},
        {title: "github", width: 98, height: 98},
        {title: "css", width: 92, height: 104},
        {title: "react", width: 112, height: 100},
        {title: "vscode", width: 98, height: 98},
        {title: "saas", width: 116, height: 86},
        {title: "tailwind", width: 114, height: 68},
        {title: "greensock", width: 120, height: 120},
        {title: "js", width: 106, height: 106},
        {title: "bootstrap", width: 120, height: 120},
        {title: "vector", width: 104, height: 100}
    ]
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <S.GridContainer>
                    <Fade cascade={true} duration={200} delay={0}>
                        {skillsData.map((s, index) => {
                            return <Skill title={s.title} key={index} width={s.width} height={s.height}/>
                        })}
                    </Fade>
                </S.GridContainer>
            </Container>
        </S.Skills>
    );
};

