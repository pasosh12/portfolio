import React from 'react';
import {SectionTitle} from "../../Components/SectionTitle";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Fade} from "react-awesome-reveal";
import {S} from './Skills_Styles';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const skillsData = [
        {title: "html5"},
        {title: "git"},
        {title: "github"},
        {title: "css"},
        {title: "react"},
        {title: "vscode"},
        {title: "saas"},
        {title: "tailwind"},
        {title: "greensock"},
        {title: "js"},
        {title: "bootstrap"},
        {title: "vector"}
    ]
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <S.GridContainer>
                    <Fade cascade={true} duration={200} delay={0}>
                        {skillsData.map((s, index) => {
                            return <Skill title={s.title} key={index}/>
                        })}
                    </Fade>
                </S.GridContainer>
            </Container>
        </S.Skills>
    );
};

