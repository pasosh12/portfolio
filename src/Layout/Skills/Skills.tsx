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
                {/*<FlexWrapper direction={"row"} wrap={"wrap"} gap={"90px"} justify="space-between">*/}
                <GridContainer>
                    {skillsArray.map((skill, index) => (
                        <SvgIcon iconsHref={iconsSprite} iconId={skill} key={index} viewBox={""} />
                    ))}
                </GridContainer>
                {/*</FlexWrapper>*/}
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`
const GridContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 90px;
    justify-content: center;
    align-items: center;
`