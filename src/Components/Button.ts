import styled, {keyframes} from 'styled-components';
import { theme } from '../Styles/Theme';

export const Button = styled.button`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    z-index: 0;

    &:hover {
     // Применение анимации при наведении 
    //    &::before {
    //        height: 100%;
    //        width: 100%;
    //    }
    }

    // whitebox
    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.backgroundColor};

        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }
`;
