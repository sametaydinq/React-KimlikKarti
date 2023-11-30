import React from "react";

const SingleUser = ({user})=>{
    return (
        <div className="single-user">
            <img src={user.picture.large} alt=''/>
            <div className="user-info">
                <h3>{user.name.first} {user.name.last}</h3>
                <div className="p"></div>
                <p className="user-mail">Email: {user.email}</p>
                <p className="user-locaiton">
                    {user.location.country} | {user.location.city}   </p>
            </div>
        </div>
    )
}

export default SingleUser

