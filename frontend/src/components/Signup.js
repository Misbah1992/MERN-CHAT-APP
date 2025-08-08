import React,{useState} from 'react'

function Signup() {
     const [ name,setName] = useState();
    const [ email,setEmail] = useState();
     const [ password,setPassword] = useState();
    const [ confirmPassword,setConfirmPassword] = useState();
    const [ pics,setPics] = useState();

    const postDetails=(pics)=>{

    }

    const submitHandler=()=>{

    }

  return (
    <div style={{width:"95%"}}>
      <div>
        <h5 style={{marginBottom:"10px",width:"100%"}}>Name*</h5>
        <input onChange={(e)=>setName(e.target.value)} placeholder=" Enter Your Name" style={{width:"100%",height:"3em"}}/>
      </div>
      <div>
        <h5 style={{marginBottom:"10px",width:"100%"}}>Email Address*</h5>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder=" Enter Your Name" style={{width:"100%",height:"3em"}}/>
      </div>
      <div>
        <h5 style={{marginBottom:"10px",width:"100%"}}>Password*</h5>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder=" Enter Your Name" style={{width:"100%",height:"3em"}}/>
      </div>
      <div>
        <h5 style={{marginBottom:"10px",width:"100%"}}>Confirm Password*</h5>
        <input onChange={(e)=>setConfirmPassword(e.target.value)} placeholder=" Enter Your Name" style={{width:"100%",height:"3em"}}/>
      </div>
      <div>
        <h5 style={{marginBottom:"10px",width:"100%"}}>Upload Your Picture</h5>
        <input onChange={(e)=>postDetails(e.target.files[0])} type="file" />
      </div>
      <div onClick={submitHandler} style={{backgroundColor:"#0041B1",padding:"1.5em",textAlign:"center",borderRadius:"12px",color:"#fff",marginBottom:"1em",marginTop:"2em"}}>Sign Up</div>
    </div>
  )
}

export default Signup
