import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    let navigate = useNavigate();
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let profilePicRef = useRef();
    let [profilePic,setProfilePic] = useState();

    let sendDatatoDBinFormData = async()=>{
        let data = new FormData();
        data.append('name',nameRef.current.value);
        data.append('email',emailRef.current.value);
        data.append('password',passwordRef.current.value);
        for (let i = 0; i <= profilePic.length; i++) {
            data.append('profilePic',profilePicRef.current.files[i]);
            
        }
        let reqOption = {
            method: 'POST',
            body:data
        }
        try {
            let res = await fetch("http://localhost:3344/multerStorage",reqOption);
        let resData = await res.json();
        console.log(resData)
        if (resData.status === "Success") {
           alert(resData.msg) 
        } else {
            alert(resData.msg) 
        }

        } catch (error) {
            console.log(error)
        }

    }

    // let sendDatatoDBinJSON = async()=>{
    //     let data = {
    //         name:nameRef.current.value,
    //         email:emailRef.current.value,
    //         password:passwordRef.current.value }  
    //     let dataInJson = JSON.stringify(data);
    //     let myheader = new Headers();
    //     myheader.append("content-type","application/json");
    //     let reqOption ={
    //         method :"POST",
    //         headers:myheader,
    //         body:dataInJson
    //     }
    //     let res = await fetch("http://localhost:3344/postDatainDB",reqOption);
    //    let dataFromserver = await res.json();
    //    if (dataFromserver.status === "Success") {
    //     alert(dataFromserver.msg)
    //    } else {
    //     alert(dataFromserver.msg)
    //     console.log(dataFromserver.data)
    //    }
    // }
  return (
    <div>
        <center>
        <form style={{backgroundColor:"lightgrey",padding:"20px",width:"300px"}}>
            <h3>Signup Form</h3>
            <img style={{width:"130px",borderRadius:"50px"}} src={profilePic}></img>

            <input multiple ref={profilePicRef} type='file' onChange={(e)=>{
               let profilePicUrl = URL.createObjectURL(e.target.files[0]);
               setProfilePic(profilePicUrl);
            }}></input>

            <input placeholder='name' ref={nameRef}></input><br></br>

            <input placeholder='email' ref={emailRef}></input><br></br>

            <input placeholder='password' ref={passwordRef}></input><br></br>
<button type='button' onClick={()=>{sendDatatoDBinFormData()}} >Signup</button>
<button onClick={()=>{
    navigate("/")
}}>Login</button>
        </form>
        </center>
    </div>
  )
}

export default Signup