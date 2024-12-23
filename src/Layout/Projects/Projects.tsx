import React from 'react';
import {Project} from "./Project/Project";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {SectionTitle} from "../../Components/SectionTitle";
import {S} from "./Project/Project_Styles"

import img1 from "../../assets/projectsImages/1.png";
import img2 from "../../assets/projectsImages/3.png";
import img3 from "../../assets/projectsImages/2.png";
import img4 from "../../assets/projectsImages/4.png";
import img5 from "../../assets/projectsImages/5.png";
import img6 from "../../assets/projectsImages/6.png";
import {SectionTitleSecond} from "../../Components/SectionTitleSecond";
import {Container} from "../../Components/Container";

const projectsArray = [
    {title: "Social Network", src: img1},
    {title: "Timer", src: img2},
    {title: "To-do List", src: img3},
    {title: "Social Network", src: img4},
    {title: "Social Network", src: img5},
    {title: "Social Network", src: img6}
]



export const Projects:React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionTitleSecond>Things I've build so far</SectionTitleSecond>
                <FlexWrapper wrap={"wrap"} gap={"34px"} justify='center' alignItems={"flex-start"}>
                    {projectsArray.map((prj, index) => (
                        <Project title={prj.title} key={index}
                                 text={"This is sample project description random things are here in description his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                                 src={prj.src}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};


