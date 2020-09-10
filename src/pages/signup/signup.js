import React from 'react'

const SignUp = (props) => {

    return (
        <div style= {{
            backgroundColor:"grey"
        }}>
            <h3>Welcome to the simple react site that I've built.</h3>
            <br />
            <br />
            <h1>SIGN UP TO GET STARTED</h1>
            <div style={{
                backgroundColor:"orange", borderRadius:"25", borderBlockColor:"orange", borderWidth:"100"
            }}>
                <p style={{fontColor:"blue", backgroundColor:"white"}}>Name {props.name}</p>
                <input style={{backgroundColor:"white"}} />
                <p style={{fontColor:"blue", backgroundColor:"white"}}>Email {props.email}</p>
                <input style={{backgroundColor:"white"}} />
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default SignUp