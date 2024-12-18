import socialLogos from "../../assets/social.svg";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Container} from "../../Components/Container";
import {Logo} from "../../Components/Logo";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileHeaderMenu} from "./mobileMenu/MobileMenu";
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

const itemsArray = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const socialIconsArray = ["github_cat", "twitter", "linkedin"]

export const Header = () => {
    return (
        <HeaderStyled>
            <FlexWrapper justify="space-between" alignItems={"center"}>
                <Logo/>
                <HeaderMenu menuItems={itemsArray} socialIcons={socialIconsArray} />
                <MobileHeaderMenu menuItems={itemsArray}/>
                {/*//socialIcons={socialIconsArray} /> */}
            </FlexWrapper>
        </HeaderStyled>
    )
};


