import React from 'react'

const Button = () => {
    return(
        <div>
            <button style={{
                backgroundColor:"white",
                fontColor:"blue",
                borderColor:"white",
                borderRadius:"10"
            }}
            onClick={()=>console.log(name, email)}>Sign up</button>
        </div>
    )
}