import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {

    }

    return (
        <div style={{ width: "95%" }}>

            <div>
                <h5 style={{ marginBottom: "10px", width: "100%" }}>Email Address*</h5>
                <input onChange={(e) => setEmail(e.target.value)} placeholder=" Enter Your Name" style={{ width: "100%", height: "3em" }} />
            </div>
            <div>
                <h5 style={{ marginBottom: "10px", width: "100%" }}>Password*</h5>
                <input onChange={(e) => setPassword(e.target.value)} placeholder=" Enter Your Name" style={{ width: "100%", height: "3em" }} />
            </div>

            <div style={{ backgroundColor: "#0041B1", padding: "1.5em", textAlign: "center", borderRadius: "12px", color: "#fff", marginTop: "2em" }} onClick={submitHandler}>Login</div>
            <div style={{ backgroundColor: "#FF3B3B", padding: "1.5em", textAlign: "center", borderRadius: "12px", color: "#fff", marginBottom: "1em", marginTop: "1em" }} onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
            }}>Get Guest User Credentials</div>
        </div>
    )
};

export default Login;
