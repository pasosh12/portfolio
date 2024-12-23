import styled from "styled-components";

const Skills = styled.section`
`
const Skill = styled.div`
    width: 120px;
    flex-grow: 1;

`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 90px;
    justify-content: center;
    align-items: center;
`
export const S ={
    Skills,
    Skill,
    GridContainer,
}