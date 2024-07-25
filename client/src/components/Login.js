import React, { useState } from 'react'
import "../Login.css";
import { useNavigate,Link } from "react-router-dom";

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function submit(e){
        e.preventDefault(); 
        

    }

  return (
    <div className="Login">
        <form action='POST'>
            <h1 className='loginheader'>Login</h1>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'/>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

            <input type='submit' onClick={submit}/>
            <br/>

            <Link to="/signup">Create an account</Link>

        </form>

    </div>
  )
}   


export default Login;