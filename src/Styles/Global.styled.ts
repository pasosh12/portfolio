import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *,
    *:before,
    * after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        scroll-behavior: smooth;
    }

    body {
        
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.backgroundColor};
        line-height: 1.2;
        min-width: 375px;
    }

    section {
        padding-top: 200px;
        @media ${theme.media.tablet}{
            padding: 80px 10px 0;
        }
        @media ${theme.media.mobile} {
            padding: 80px 10px 0;
            //margin-top:80px;
        }
    }

    p {
        margin: 0 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }
`