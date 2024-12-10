import socialLogos from "../../assets/social.svg";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import {FlexWrapper} from "../../Components/FlexWrapper";


const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt={""}></img>
            <FlexWrapper  gap="51px" alignItems="center">
            <nav>
                <StyledUl>
                    <StyledLi>
                        <a href="">Home</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">About</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Tech Task</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Projects</a>
                    </StyledLi>
                    <StyledLi>
                        <a href="">Contacts</a>
                    </StyledLi>
                </StyledUl>
            </nav>

            <FlexWrapper gap="20px" alignItems="center">
                <a href={"#"}>
                    <SvgIcon  iconsHref={socialLogos} iconId={"github_cat"} size={'30px'} viewBox={"0 0 30 30"}/>
                </a>
                <a href={"#"}>
                    <SvgIcon iconsHref={socialLogos} iconId={"twitter"} size={"31px"} viewBox={"0 0 30 30"} />
                </a>
                <a href={"#"}>
                    <SvgIcon iconsHref={socialLogos} iconId={"linkedin"} size={"31px"} viewBox={"0 0 30 30"}/>
                </a>
            </FlexWrapper>
            </FlexWrapper>
        </StyledHeader>
    )
};
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    alig-items: flex-end;
    gap: 30px;
    list-style: none;
    align-items: center;
`
export default Header