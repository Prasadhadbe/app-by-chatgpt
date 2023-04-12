import axios from "axios";
import React, {useState, useEffect} from "react";
import Form from "./Form";

const DisplayData = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get('<API endpoint>').then((response) => {
            setData(response.data)
        }).catch((error) => console.log(error));
    },[]);

    return (
        <div>
        {data.length === 0 && <p>Loading...</p>}
        {data.length > 0 && (
            <table>
            <thread>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thread>
        <tbody>
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
        3313</table>
        )}

        
        </div>
    );

};

export default DisplayData;