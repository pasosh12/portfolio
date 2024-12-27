import React from 'react';
import {SectionTitle} from "../../Components/SectionTitle";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Fade} from "react-awesome-reveal";
import {S} from './Skills_Styles';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const skillsData = [
        {iconId: "html", viewBox: "0 -5 120 120"},
        {iconId: "github", viewBox: "0 0 120 120"},
        {iconId: "css", viewBox: "-15 -10 120 120"},
        {iconId: "react", viewBox: "-4 -7.5 120 120"},
        {iconId: "webstorm", viewBox: "0 0 110 110"},
        {iconId: "ts", viewBox: "-5 -8 130 130 "},
        {iconId: "js", viewBox: "0 0 120 120"},
        {iconId: "saas", viewBox: "-10 -20 120 120"},
        {iconId: "bootstrap", viewBox: "0 0 120 120"},
        {iconId: "vector", viewBox: "-10 -10 120 120"},
        {iconId: "tailwind", viewBox: "0 -25 120 120"},
        {iconId: "greensock", viewBox: "0 0 120 120"}
    ]

    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <S.GridContainer>
                    <Fade cascade={true} duration={200} delay={0}>
                        {skillsData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index} viewBox={s.viewBox}/>
                        })}
                    </Fade>
                </S.GridContainer>
            </Container>
        </S.Skills>
    );
};

