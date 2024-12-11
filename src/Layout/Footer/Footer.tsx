import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";

export const Footer = () => {
    return (
        <footer>
            <hr/>
            <FlexWrapper justify={"space-between"} alignItems={"center"}>
                <StyledUl>
                    <StyledLi>
                        <a href="">Home</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">About</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Technologies</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Projects</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Contacts</a>
                    </StyledLi>
                </StyledUl>
                <p>
                    Designed and built by Pavan MG with Love & Coffee
                </p>
            </FlexWrapper>
        </footer>
    );
};
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`

const StyledLi = styled.li`
    color: #666666;
    font-weight: 500;
    font-size: 20px;

    a {
        text-decoration: none;
    }
`
