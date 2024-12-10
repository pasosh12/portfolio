import React from 'react';
import {Project} from "./Project";
import {FlexWrapper} from "../../Components/FlexWrapper";
import styled from "styled-components";
import {SectionTitle} from "../../Components/SectionTitle";

import img1 from "../../assets/projectsImages/1.png";
import img2 from "../../assets/projectsImages/3.png";
import img3 from "../../assets/projectsImages/2.png";
import img4 from "../../assets/projectsImages/4.png";
import img5 from "../../assets/projectsImages/5.png";
import img6 from "../../assets/projectsImages/6.png";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";

const projectsArray = [
    {title : "Social Network", src : img1},
    {title : "Timer", src : img2},
    {title : "To-do List", src : img3},
    {title : "Social Network", src : img4},
    {title : "Social Network",src : img5},
    {title : "Social Network", src : img6}
]


const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionTitleSecond>Things I've build so far</SectionTitleSecond>
            <FlexWrapper wrap={"wrap"} gap={"34px"} justify='center'>
                {projectsArray.map((prj, index) => (
                    <Project title={prj.title} key={index}
                             text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                    src={prj.src} />
                    ))}
            </FlexWrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
    background-color: aliceblue;
`

export default Projects;