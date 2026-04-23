import React from "react";

class Message extends React.Component{

    constructor(props){
        console.log("first Constructor");
        
        super(props)
        this.state = {'msg' : "Hello"}
    }

    gMHandler = () => {
        this.setState({"msg" : "Good Morning"})
    }

    gNHandler = () => {
        this.setState({"msg" : "Good Night"})
    }

    
    render(){
        console.log("Second Render Method");
        return <div>
            <h1>Message Component Class</h1>
            <h3>Values : {this.state.msg}</h3>
            <button onClick = {this.gMHandler}>GM</button>
            <button onClick= {this.gNHandler}>GN</button>
        </div>
        
    }
}

export default Message;