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
            backgroundColor:"grey", textAlign:"center", height: 600,
        }}>
            <h5 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>Welcome to the simple react site that I've built.</h5>

            <h1 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>SIGN UP TO GET STARTED</h1>

            <div style={{
                backgroundColor:"orange", position: "center",
                borderRadius:25,
                width: 500,
                height: 300,
                marginLeft:370,
            }}>

            <br />

            <Input  style={{backgroundColor:"white", placeholderColor:"blue", fontColor:"blue"}}
            value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <br />

            <Input style={{backgroundColor:"white", placeholderColor:"blue", fontColor:"blue"}} 
            value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
            <br />

            <Button onClick={()=>console.log(name, email)} disabled={!email.length || !name.length} onClick={handleClick} text="Sign up" />

            </div>

        </div>
    )
}

export default SignUpPage