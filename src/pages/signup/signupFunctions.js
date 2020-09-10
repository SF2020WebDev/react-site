import React, {useState} from 'react'
import SignUp from './signup'
import { useState } from 'react'

const SignUpPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />

            <SignUp name={name} email={email}
            />
            <button onClick={()=>console.log(name, email)}>Sign Up</button>
        </div>
    )
}

export default SignUpPage