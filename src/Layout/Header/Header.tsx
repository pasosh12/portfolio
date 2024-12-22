import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Logo} from "../../Components/Logo";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileHeaderMenu} from "./mobileMenu/MobileMenu";
import {Container} from "../../Components/Container";
import {theme} from "../../Styles/Theme";

const HeaderStyled = styled.header`
    padding: 41px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    @media ${theme.media.mobile} {
        padding: 20px 0 ;
    }
    //&::-webkit-scrollbar {
    //    overflow-y: scroll;
    //    background-color: rgba(0, 0, 0, 0.06);
    //
    //}
`

const itemsArray = ["Home", "About", "Tech Stack", "Projects", "Contacts"]
const socialIconsArray = ["github_cat", "twitter", "linkedin"]

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={itemsArray} socialIcons={socialIconsArray}/>
                    <MobileHeaderMenu menuItems={itemsArray}/>
                    {/*//socialIcons={socialIconsArray} /> */}
                </FlexWrapper>
            </Container>
        </HeaderStyled>
    )
};


