import socialLogos from "../../assets/social.svg";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Container} from "../../Components/Container";

const HeaderStyled = styled.header`
    padding: 41px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    max-width: 1194px;
    width: 100%;
    margin: 0 auto;
`
const StyledLi = styled.li`
    color: #666666;
    font-weight: 500;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;

    a {
        text-decoration: none;
        font-size: 20px;
        color: grey;
    }
`
const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
    align-items: center;
`
const itemsArray = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const socialIconsArray = ["github_cat", "twitter", "linkedin"]

export const Header = () => {
    return (
        <HeaderStyled>
            <FlexWrapper justify="space-between" alignItems={"center"}>
                <a href="#">
                    <img src={logo} alt={"logo"}></img>
                </a>
                <FlexWrapper gap="51px" alignItems="center">
                    <nav>
                        <StyledUl>
                            {itemsArray.map((item, index) => (
                                <StyledLi>
                                    <a href="#">{item}</a>
                                </StyledLi>
                            ))}
                        </StyledUl>
                    </nav>
                    <FlexWrapper as={"nav"} gap="20px" alignItems="center">
                        <StyledUl>
                            {socialIconsArray.map((item) => (
                                <StyledLi>
                                    <a href={"#"}>
                                        <SvgIcon iconsHref={socialLogos} iconId={item} size={'30px'}
                                                 viewBox={"0 0 30 30"}/>
                                    </a>
                                </StyledLi>
                            ))}
                        </StyledUl>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </HeaderStyled>
    )
};


