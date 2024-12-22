import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import styled from "styled-components";
import {SectionTitle} from "../../Components/SectionTitle";
import iconsSprite from '../../assets/skills.svg';
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
    const skillsArray = [
        "html5", "git", "github", "css", "react", "vscode", "saas", "tailwind", "greensock", "js", "bootstrap", "vector"]
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <GridContainer>
                    <Fade cascade={true} duration={200} delay={0}>

                    {skillsArray.map((skill, index) => (
                        <StyledSkill key={index}>
                        <SvgIcon iconsHref={iconsSprite} iconId={skill} key={index} viewBox={""} />
                        </StyledSkill>
                    ))}
                    </Fade>
                </GridContainer>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`
const StyledSkill = styled.div`
    width: 120px;
    flex-grow: 1;
    
`
const GridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 90px;
    justify-content: center;
    align-items: center;
`