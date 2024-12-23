import React from 'react';
import logo from "../assets/logo.svg";
import {animateScroll as scroll} from "react-scroll";
export const Logo = () => {

    return (
        <a href={"#"} onClick={()=>   scroll.scrollToTop()}>
            <img src={logo} alt={"logo"}/>
        </a>
    );
};

