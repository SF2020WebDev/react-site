import React, {useState} from 'react'

const SignUpPage = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return(
        <div style= {{
            backgroundColor:"grey", textAlign:"center"
        }}>
            <h5 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>Welcome to the simple react site that I've built.</h5>

            <h1 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>SIGN UP TO GET STARTED</h1>

            <div style={{
                backgroundColor:"orange", backgroundSize:"10", borderRadius:"25", borderBlockColor:"orange", borderWidth:"50"
            }}>

            <input  style={{backgroundColor:"white"}}
            value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <br />

            <input style={{backgroundColor:"white"}}
            value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
            <br />

            <button onClick={()=>console.log(name, email)}>Sign up</button>

            </div>

        </div>
    )
}

export default SignUpPage