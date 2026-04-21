import React from "react"
import Emp from "./Emp"
class User extends React.Component{

    Uname = "Swaroop"
    esal = "1234567890"
    phonenumber = 12345

    render(){return <div>
        <h1>User Component</h1>
        <hr />
        <Emp ename = {this.Uname} salary = {this.esal} phonenumber = {this.phonenumber} />
    </div>
}

}

export default User;