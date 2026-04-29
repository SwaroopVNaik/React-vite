import axios from "axios";
import React, { useEffect, useState } from "react";
let Employee = () =>{
    let [users, setusers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((Response) => {
                setusers(Response.data)
            })
            .catch((err) => {console.log(err); })
    }, [])

    return <div>
        Employee Component
        <pre>{JSON.stringify(users)}</pre>
        {
        users.length>0 ?
        <>
        <table border={3}>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>City</th>
                </tr>
            </thead>
                <tbody>
                    {
                        // Interating the array using the map (when we use map (ARROW FUNCTION)
                        users.map((users) => {
                            return <tr key = {users.id}>
                                <td>{users.id}</td>
                                <td>{users.username}</td>
                                <td>{users.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
        </> : <>No Data</>
        }
    </div>
}

export default Employee;