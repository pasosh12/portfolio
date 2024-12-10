import React from 'react';


type IconProps = {
    iconsHref: string;
    iconId: string;
    size?: string | number;
    viewBox?: string;
}

const SvgIcon = (props: IconProps) => {
    return (
        <svg width={props.size || "120"} height={props.size || "120"} viewBox={props.viewBox || "0 0 120 120"}>
            <use xlinkHref={`${props.iconsHref}#${props.iconId} `}/>
        </svg>
    );
};

export default SvgIcon;