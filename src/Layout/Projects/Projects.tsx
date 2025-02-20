import React from 'react';
import {Project} from "./Project/Project";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {SectionTitle} from "../../Components/SectionTitle";
import {S} from "./Project/Project_Styles"
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";
import {Slide} from "react-awesome-reveal";
import {projectsItems} from '../../data/projects'


export const Projects: React.FC = () => {
    const projects = projectsItems.map((project, index) => (
        <Project key={index}
                 img={project.img}
                 title={project.title}
                 text={project.text}
                 livePreviewURL={project.livePreviewURL}
                 viewCodeURL={project.viewCodeURL}
                 technologies={project.technologies}
        />
    ))

    return (
        <S.Projects id={"projects"}>
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <SectionTitle>Projects</SectionTitle>
                    <SectionTitleSecond>Things I've build so far</SectionTitleSecond>
                    <FlexWrapper wrap={"wrap"} gap={"34px"} justify='center'>
                        {projects}
                    </FlexWrapper>
                </Slide>
            </Container>
        </S.Projects>
    );
};


