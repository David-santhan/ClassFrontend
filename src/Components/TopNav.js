import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function TopNav() {
    let navigate = useNavigate();
let [userDetails,setuserDetails] = useState([]);
let userId = localStorage.getItem("userId");



    let getParticularUserData = async ()=>{
        let reqOption = {
          method:"GET"
        }
        try {
          let res = await fetch (`http://localhost:3344/getParticularUserData/${userId}`,reqOption);
          let JSOData = await res.json();
          setuserDetails(JSOData.data)
        } catch (error) {
          console.log(error);
        }
      }
        useEffect(()=>{
          getParticularUserData();
        })

        let deleteTheUser = async()=>{
          let reqOption = {
            method:"DELETE"
          }
          try {
            let res = await fetch (`http://localhost:3344/deleteUser/${userId}`,reqOption);
            let resData = await res.json();
             if (resData.status === "Success") {
               alert(resData.msg)
               navigate("/")
             }else{
              alert(resData.msg)
             }
          } catch (error) {
            console.log(error)
          }
        }


  return (
    <div>
        <header style={{width:"100%",height:"10vh",backgroundColor:"lightgray",display:"flex",textAlign:"center"}}>
  <h4 >Home</h4>
  <h4 onClick={()=>{
    navigate("/About")
  }} >About</h4> <h4 onClick={()=>{
    navigate("/Update")
  }}>Update</h4> 
  
  <h4 onClick={()=>{
    deleteTheUser()
  }}>Delete</h4>  
  <div style={{display:"flex",marginLeft:"50%"}}>
    <img style={{width:"50px",height:"7vh",borderRadius:"50px"}} src={`http://localhost:3344/${userDetails.profilePic}`
}></img>
  <p>Welcome : {userDetails.name}</p> <h4 onClick={()=>{
    navigate("/")
  }}>Signout</h4>
  </div>
 
</header>
    </div>
  )
}

export default TopNav