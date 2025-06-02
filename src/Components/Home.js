import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from './TopNav';

function Home() {


  return (
    <div>
<TopNav/>
{/* <button onClick={()=>{
  gettingData();
}}>get Data</button>
<button onClick={()=>{
  getParticularUserData();
}}>
  Get Particular User Data
</button>

<h4>Welcome {userDetails.name}</h4>

 <table style={{border:"1px solid black"}}>
      <thead style={{border:"1px solid black"}}>
       <tr style={{border:"1px solid black"}}>
       <th  style={{border:"1px solid black"}}>Name</th>
        <th style={{border:"1px solid black"}}>Email</th>
        <th style={{border:"1px solid black"}}>Profile</th>
       </tr>
      </thead>
{
 serverData && serverData.map((item,index)=>{
    return(
    
      <tbody>
        <tr style={{border:"1px solid black"}}>
          <td style={{border:"1px solid black"}}>{item.name}</td>
          <td style={{border:"1px solid black"}}>{item.email}</td>
          <td style={{border:"1px solid black"}}><img style={{ width: "40px", height: "40px" }} src={`http://localhost:3344/${item.profilePic}`} ></img></td>
        </tr>
      </tbody>
   
    )
  })
}
</table> */}
<h1>Welcome To Home Page</h1>
    </div>
  )
}

export default Home