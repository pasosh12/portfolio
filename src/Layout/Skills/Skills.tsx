import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {SectionTitle} from "../../Components/SectionTitle";
import iconsSprite from '../../assets/skills.svg';
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";

export const Skills = () => {
    const skillsArray = [
        "html5", "git", "github", "css", "react", "vscode", "saas", "tailwind", "greensock", "js", "bootstrap", "vector"]
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionTitleSecond>Technologies I’ve been working with recently</SectionTitleSecond>
                <FlexWrapper direction={"row"} wrap={"wrap"} gap={"90px"} justify="space-between">
                    {skillsArray.map((skill, index) => (
                        <SvgIcon iconsHref={iconsSprite} iconId={skill} key={index}/>
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //display: grid;
    //grid-template-rows: 1fr 1fr 1fr;
`
