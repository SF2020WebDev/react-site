import React from 'react'

const Input = ({value, onChange, placeholder}) => {
    return(
        <div>
            <input style={{
                borderRadius:25,
                height:40,
                width: 300,
                color:"blue",
                border: "none",
                paddingLeft: 15
            }} 
            value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input