import { useEffect, useState } from "react";
import axios from "axios";

// useState = Stores data 
// useEffect = runs code when component loads
// axios = used to fetch data from an API

let Product = () =>{
    let [prod_Data, setProductData] = useState({});
    useEffect(() => {
        axios.get('https://dummyjson.com/products')

        // runs when API call is successful
        .then((Response)=>{setProductData(Response.data)})

        // runs if something goes wrong
        .catch(()=>{})
    }, [])
    
    return <div>
        <h3>Product Component</h3>
        <pre>{JSON.stringify(prod_Data)}</pre>
        <pre>{JSON.stringify(prod_Data.products)}</pre>
        {
            Object.keys(prod_Data).length > 0 ? 
            <>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Interating the array using the map (when we use map (ARROW FUNCTION)
                        prod_Data.products.map((prod)=>{
                            return <tr key = {prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.title}</td>
                                <td>{prod.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </>
            :<h2>No Data</h2>
        }
    </div>
}

export default Product;