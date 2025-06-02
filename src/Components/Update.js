import React, { useEffect, useReducer,useRef, useState } from 'react'
import TopNav from './TopNav';

function Update() {

  let nameRef = useRef();
  let passwordRef = useRef();
  let profilePicRef = useRef();
  let emailRef = useRef();
  let [profilePic,setProfilePic] = useState()
  let userId = localStorage.getItem("userId");

  let getParticularUserData = async ()=>{
    let reqOption = {
      method:"GET"
    }
    try {
      let res = await fetch (`http://localhost:3344/getParticularUserData/${userId}`,reqOption);
      let JSOData = await res.json();
      console.log(JSOData);
     nameRef.current.value = JSOData.data.name;
     passwordRef.current.value = JSOData.data.password;
     emailRef.current.value = JSOData.data.email;
     setProfilePic(`http://localhost:3344/${JSOData.data.profilePic}`)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getParticularUserData();
  })

  let sendDatatoDBinFormData = async()=>{
    let data = new FormData();
    data.append('name',nameRef.current.value);
    data.append('password',passwordRef.current.value);
    data.append('email',emailRef.current.value);
    for (let i = 0; i <= profilePic.length; i++) {
        data.append('profilePic',profilePicRef.current.files[i]);
        
    }
    let reqOption = {
        method: 'PUT',
        body:data
    }
    try {
        let res = await fetch("http://localhost:3344/updateEmployee",reqOption);
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

//   let emailRef = useRef();
//   let passwordRef = useRef();
//   let nameRef = useRef();
//   let userId = localStorage.getItem("userId");
//   let profilepicRef=useRef();
//   const [profilePic,setProfilePic] = useState()
//   let getParticularUserData = async ()=>{
//     let reqOption = {
//       method:"GET"
//     }
//     try {
//       let res = await fetch (`http://localhost:3344/getParticularUserData/${userId}`,reqOption);
//       let JSOData = await res.json();
//       console.log(JSOData);
//       emailRef.current.value = JSOData.data.email;
//       nameRef.current.value = JSOData.data.name;
//       passwordRef.current.value = JSOData.data.password;
//       setProfilePic(`http://localhost:3344/${JSOData.data.profilePic}`)


//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(()=>{
//     getParticularUserData();
//   })


//   let sendDatatoDBinFormData = async()=>{
//     let data = new FormData();
//     data.append('name',nameRef.current.value);
//     data.append('email',emailRef.current.value);
//     data.append('password',passwordRef.current.value);
//     for (let i = 0; i <= profilePic.length; i++) {
//         data.append('profilePic',profilepicRef.current.files[i]);
        
//     }
//     let reqOption = {
//         method: 'PUT',
//         body:data
//     }
//     try {
//         let res = await fetch("http://localhost:3344/update",reqOption);
//     let resData = await res.json();
//     console.log(resData)
//     if (resData.status === "Success") {
//        alert(resData.msg) 
//     } else {
//         alert(resData.msg) 
//     }

//     } catch (error) {
//         console.log(error)
//     }

// }
  return (
    <div>
      <TopNav/>
    <center>
    <form style={{width:"300px",backgroundColor:"lightgray"}}>
      <input readOnly ref={emailRef}></input>
      <input placeholder='name' ref={nameRef}></input>
      <input placeholder='password' ref={passwordRef}></input>
      <img style={{width:"80%"}} src={profilePic}></img>
      <input type='file' onClick={(e)=>{
          let profilePicURL = URL.createObjectURL(e.target.files[0]);
          setProfilePic(profilePicURL);
      }} ref={profilePicRef}></input>
      <button type='button' onClick={sendDatatoDBinFormData}>Update</button>
     </form>
    </center>
    </div>
  )
}

export default Update