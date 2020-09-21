import React from 'react'

const Button = ({onClick, disabled, text}) => {
    return(
        <div>
            <button style={{
                backgroundColor:"white",
                color:"blue",
                borderRadius:25,
                height:50,
                width: 150,
                border: "none"
            }}
            disabled={disabled}
            onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button

