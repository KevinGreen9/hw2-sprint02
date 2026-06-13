import * as React from "react";

export type bntType = {
    name: string,
    onClick: () => void,
    disabled?: boolean,
     style?: React.CSSProperties,

 }
export const Button = ({name,  onClick, disabled, style}: bntType) => {
    return (
        <button className="btn"
            onClick={onClick}
                disabled={disabled}
                style={style}
            > {name}
    </button>
)

};
