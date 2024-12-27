import styled, {keyframes} from 'styled-components';
import { theme } from '../Styles/Theme';

export const Button = styled.button<{borderColor?:string}>`
    position: relative;
    //font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    min-width: 170px;
    min-height: 32px;
    padding: 8px 16px;
    z-index: 0;
    font-weight: 500;
    color: ${theme.colors.borderColor};
    border: 1px solid ${(props)=>props.borderColor || 'none'};
    border-radius: 10px;
    
    &:hover {
        // Применение анимации при наведении 
        //   transform: translate(50% , 50%);

        &::before {
            transition: all 0.3s ease-in-out;
            height: 100%;
            width: 100%;
        }
    }

    // whitebox

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        width: 50%;
        
        
        background-color:white;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }
`;
