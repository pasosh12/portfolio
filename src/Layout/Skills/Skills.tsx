import React from 'react';
import {SectionTitle} from "../../Components/SectionTitle";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Slide, Zoom} from "react-awesome-reveal";
import {S} from './Skills_Styles';
import {Skill} from "./Skill/Skill";
import {skills} from "../../data/skills_icons";

export const Skills = () => {

    const skillItems = skills.map((s, index) => {
         return <Skill icon={s.icon} title={s.title} size={'90px'} color={s.color} key={index} />
    })
    return (
        <S.Skills id={"skills"}>
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                    <S.GridContainer>
                        <Zoom duration={300} cascade={true} triggerOnce={true} direction={'up'}>
                            {skillItems}
                        </Zoom>
                    </S.GridContainer>
                </Slide>
            </Container>
        </S.Skills>
    );
};

