import React from "react";

class Emp extends React.Component{

    render(){
        return <div>
        <h1>Employee Component</h1>
        <hr />
        {/* Objects connet be directly printed in browser we are converting them to string */}
        <pre>{JSON.stringify(this.props)}</pre>
        
        <h3>EMP Name : {this.props.ename}</h3>
        <h3>EMP Sal : {this.props.salary}</h3>
        <h3>EMP Phone Number : {this.props.phonenumber}</h3>
    </div>
}

}

export default Emp;