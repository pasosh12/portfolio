import React from 'react';


type IconProps = {
    iconsHref: string;
    iconId: string;
    size?: string | number;
    viewBox?: string;
    height?: number | string;
    width?: number | string;
}

const SvgIcon = (props: IconProps) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}>
            <use xlinkHref={`${props.iconsHref}#${props.iconId} `}/>
        </svg>
    );
};

export default SvgIcon;