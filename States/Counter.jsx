import React, { useState } from "react";

let Counter = () => {
    let [Counter , setCounter] = useState(1)
    let [message, setMessage] = useState("")

    let increment_handler = () =>{
        setCounter(Counter + 1)
        setMessage("Good Morning");
        
    }

    let Decrement_handler = () => {
        setCounter(Counter - 1)
        setMessage("Good Night")
        
    }

    return <div>
        <h1>Counter Component</h1>
        <h2>Counter Value : {Counter}</h2>
        <h3>{message}</h3>
        <button onClick={increment_handler}> Increment </button>
        <button onClick={Decrement_handler} disabled={Counter <= 0}> Decrement </button>
    </div>
}

export default Counter;