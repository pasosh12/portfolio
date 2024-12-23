import React, {useState} from "react";
import {S} from './headerMenu/Header_Styles'
import {FlexWrapper} from "../../Components/FlexWrapper";
import {Logo} from "../../Components/Logo";
import {DesktopHeader} from "./headerMenu/desktopHeader/DesktopHeader";
import {MobileHeader} from "./headerMenu/mobileHeader/MobileHeader";
import {Container} from "../../Components/Container";

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint:number = 768
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo />
                    {width > breakpoint ?
                        <DesktopHeader/>
                        :
                        <MobileHeader />
                    }
                    {/*//socialIcons={socialIconsArray} /> */}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
};


