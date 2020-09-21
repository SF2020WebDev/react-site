import React, {useState} from 'react'
import Button from '../../components/button.js'
import Input from '../../components/input.js'

const SignUpPage = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    


    const handleClick = () => {
        props.history.push('/home')
        console.log(name, email)
      }

    return(
        <div style= {{
            backgroundColor:"grey", textAlign:"center", height: 600, alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"
        }}>
            <h5 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>Welcome to the simple react site that I've built.</h5>

            <h1 style={{justifyContent:"flex-start", alignItems:"center", flex:1}}>SIGN UP TO GET STARTED</h1>

            <div style={{
                flex: 1,
                alignItems:"center",
                alignContent:"center",
                backgroundColor:"orange", 
                justifyContent:"center",
                borderRadius:25,
                width:400,
                height:300
                
            }}>

            <br />
            <br />

            <Input  style={{backgroundColor:"white", placeholderColor:"blue", fontColor:"blue"}}
            value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <br />
            <br />

            <Input style={{backgroundColor:"white", placeholderColor:"blue", fontColor:"blue"}} 
            value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <br />
            <br />

            <Button style={{
                backgroundColor:"white",
                fontColor:"blue",
                borderRadius:25
            }} 
            onClick={handleClick} disabled={!email.length || !name.length} text="Sign up" />

            <br />
            <br />
            
            </div>

        </div>
    )
}

export default SignUpPage