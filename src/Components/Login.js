import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    let emailRef = useRef();
    let passwordRef = useRef();
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let validateForm = ()=>{
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        if (emailRegEx.test(email)=== true) {
            navigate('/Home')
        } else {
            alert("Enter Valid Email")
        }
    }

    const handleLogin = async()=>{
     try {
        let reqOption = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password:passwordRef.current.value
            })    
        }
        let res = await fetch("http://localhost:3344/login",reqOption);
        let data = await res.json();
        if(data.msg === "Login Success"){
            navigate('/Home')
            alert(data.msg)
            console.log(data.employee)
            localStorage.setItem("userId",data.employee._id);
           
        }else{
            alert(data.msg)
        }
     } catch (error) {
        
     }
    }


  return (
    <div>
       <center>
       <form  style={{backgroundColor:"lightgrey",padding:"20px",width:"300px",marginTop:"20px"}}>
        <h2>Login Form</h2> <hr/>
            <input ref={emailRef} placeholder='Email'></input> <br/>
            <input ref={passwordRef} placeholder='Password'></input> <hr/>
            <button onClick={()=>{
                navigate('/Signup')
            }}>Signup</button>
            <button type='button' onClick={()=>{
                handleLogin();
            }}>Login</button>

        </form>
       </center>
    </div>
  )
}

export default Login