import React from 'react'

const Button = ({onClick, text}) => {
    return(
        <div>
            <button style={{
                backgroundColor:"white",
                fontColor:"blue",
                borderColor:"white",
                borderRadius:"10"
            }}
            onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button

