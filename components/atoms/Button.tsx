import React from 'react'

interface ButtonProps {
    content: string,
    className: string,
    onClick:(type:any) => void,
    disabled?:  boolean ;
}


const Button: React.FC<ButtonProps> = ({ content, className, onClick,disabled  }) => {
    return (
        <button className={`btn ${className } ${disabled?"disable-attr-btn":""}`}  onClick={onClick}>{content}</button>
    )
}

export default Button