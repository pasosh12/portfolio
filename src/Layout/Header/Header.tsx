import socialLogos from "../../assets/social.svg";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Container} from "../../Components/Container";


const Header = () => {

    const itemsArray = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
    const socialIconsArray = ["github_cat", "twitter", "linkedin"]
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <img src={logo} alt={""}></img>
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
                        <FlexWrapper gap="20px" alignItems="center">
                            {socialIconsArray.map((item) => (
                                <a href={"#"}>
                                    <SvgIcon iconsHref={socialLogos} iconId={item} size={'30px'}
                                             viewBox={"0 0 30 30"}/>
                                </a>
                            ))}
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`
const StyledLi = styled.li`
    color: #666666;
    font-weight: 500;
    font-size: 20px;

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
export default Header