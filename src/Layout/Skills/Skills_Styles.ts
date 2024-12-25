import styled from "styled-components";
import {theme} from "../../Styles/Theme";

const Skills = styled.section`
`
const Skill = styled.div`
    //width: 120px;
    //flex-grow: 1;

`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 90px;
    justify-items: center;
    align-items: center;
    padding: 0 20px;
    @media ${theme.media.mobile} {
        gap: 30px;
        svg{
            width:100px;
            height:100px;
        }
    }
`
export const S ={
    Skills,
    Skill,
    GridContainer,
}
