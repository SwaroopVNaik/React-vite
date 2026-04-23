import React,{ useState } from "react"
let Message_State =()=>{
    let [Mes,setMes]=useState("hello");
    let gmHandler=()=>{
        setMes("Good Morning")
    }
    let gnHandler=()=>{
        setMes("Good Night")
    }
    return <div>
        <h3>Message Component Arrow function</h3>
        <h3> Message value:{Mes}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>

}
export default Message_State;