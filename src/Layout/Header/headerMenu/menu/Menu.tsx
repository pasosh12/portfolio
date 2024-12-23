import React from 'react';
import {S} from "../Header_Styles"

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => (
                <S.ListItem key={index}>
                    <S.Link href="#">
                        <span>{item}</span>
                    </S.Link>
                </S.ListItem>
            ))}
        </ul>
    );
};


