import React,{useEffect,useState} from 'react';
import axios from "axios";

function Chatpage() {

    const [chats ,setChats] = useState([])

    const fetchChats= async()=>{
        const data = await axios.get('http://localhost:5000/chats')
        console.log("--------",data)
    };
    
    useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      Chatpage
    </div>
  )
}

export default Chatpage
