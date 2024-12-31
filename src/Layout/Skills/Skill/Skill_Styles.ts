import styled from "styled-components";

const Skill = styled.div`
    & > svg {
        transition: transform 0.2s ease-in-out;
    }

    &:hover svg {
        transform: scale(1.1);
    }

`

export const S ={
    Skill,
}