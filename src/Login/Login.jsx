import {useState} from "react"
let Login = () => {

    let [user, setUser] = useState ({"email" : "", "password" : ""})

    let updatehandler = (event)=>{
        setUser({...user, [event.target.name]:event.target.value})
    }

    let submitHandler = (event) => {
        alert(JSON.stringify(user))
    }


    return <div> 
        <h3>Login Component</h3>
        <hr />
        <pre>{JSON.stringify(user)}</pre>
        <form  onSubmit={submitHandler}>
            Email Id : <input type="text" onChange={updatehandler} name="email" />
            <br/>
            <br/>
            Password : <input type="password"  onChange={updatehandler} name="Password"/> 
            <br/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
    </div>
}

export default Login                  