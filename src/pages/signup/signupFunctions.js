import React, {useState} from 'react'
import Button from '../../components/button.js'
import Input from '../../components/input.js'

const SignUpPage = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = () => {
        props.history.push('/home')
      }

    return(
        <div style= {{
            backgroundColor:"grey", textAlign:"center"
        }}>
            <h5 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>Welcome to the simple react site that I've built.</h5>

            <h1 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>SIGN UP TO GET STARTED</h1>

            <div style={{
                backgroundColor:"orange", backgroundSize:"10", borderRadius:"25", borderBlockColor:"orange", borderWidth:"50"
            }}>

            <Input  style={{backgroundColor:"white"}}
            value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <br />

            <Input style={{backgroundColor:"white"}}
            value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
            <br />

            <Button onClick={()=>console.log(name, email)} onClick={handleClick} text="Sign up" />

            </div>

        </div>
    )
}

export default SignUpPage