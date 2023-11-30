import React from "react";
import { useState,useEffect} from "react";
import axios from  'axios'


import SingleUser from "./SingleUser";

const UserList = () => {

    const [users, setusers] = useState([])

    const fetchUsers = async ()=>{
        const response = await axios.get ("https://randomuser.me/api/?results=5")
        setusers(response.data.results)

    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return (
    <div className="user-list">
        <u1>
            {users.map((user,idx)=>(
                <li>
                    <SingleUser user ={user} key={idx}/> {' '}

                </li>
            ))}
        </u1>
    </div>    
    )


};

export default UserList