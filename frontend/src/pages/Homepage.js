import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Homepage() {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <div style={{ width: "40vw", backgroundColor: "#fff", display: "flex", flexDirection: "column", alignItems: "center",borderRadius:"1em",padding:"1em" }}>
      <div style={{ fontSize: "2em",padding:"1em" }}>Talking Shawking</div>
      <div style={{ display: "flex", textAlign: "center", width: "100%" }}>
        <div onClick={()=>setShowLogin(true)} style={{ width: "50%", backgroundColor: "#1A9D0E", width: "50%", padding: "1em", margin: "1em", borderRadius: "2em", color: "#fff" }}>Login</div>
        <div onClick={()=>setShowLogin(false)} style={{ width: "50%", backgroundColor: "#9700C9", width: "50%", padding: "1em", margin: "1em", borderRadius: "2em", color: "#fff" }}>Sign Up</div>
      </div>
      {showLogin ?
        <Login />
        :
        <Signup />}
    </div>
  )
};

export default Homepage
