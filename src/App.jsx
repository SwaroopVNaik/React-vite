import React from "react";
import User from "./Users/User";
import Message from "../States/Message";
import Message_State from "../States/Message_State";
import Counter from "../States/Counter";
class App extends React.Component{
    
    render(){
        return <div>
        <h1>App Component</h1>
        <hr/>
        <User/>
        <hr />
        <Message />
        <hr />
        <Message_State />
        <hr />
        <Counter />
    </div>
}

}

export default App;