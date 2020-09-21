import React from 'react'

const Button = ({onClick, disabled, text}) => {
    return(
        <div>
            <button style={{
                backgroundColor:"white",
                fontColor:"blue",
                borderColor:"white",
                borderRadius:"10"
            }}
            disabled={disabled}
            onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button

