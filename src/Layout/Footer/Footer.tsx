import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";

export const Footer = () => {
    const itemsArray = ["Home", "About", "Technologies", "Projects", "Contacts"]

    return (
        <footer>
            <hr/>
            <FlexWrapper justify={"space-between"} alignItems={"center"}>
                <StyledUl>
                    {itemsArray.map((item, index) => (
                        <StyledLi>
                            <a href="#">{item}</a>
                        </StyledLi>
                    ))}
                </StyledUl>
                <p>
                    Designed and built by Pavan MG with Love & Coffee
                </p>
            </FlexWrapper>
        </footer>
    )
        ;
};
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`

const StyledLi = styled.li`
    a {
        text-decoration: none;
        color: #666666;
        font-weight: 500;
        font-size: 20px;
    }
`
