type bntType = {
    name: string,
    onClick: () => void,
    disabled?: boolean,

}
export const Button = ({name,  onClick, disabled}: bntType) => {
    return (
        <button className="btn"
            onClick={onClick}
                disabled={disabled}
            > {name}
    </button>
)

};
