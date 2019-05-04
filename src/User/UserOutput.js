import React from 'react';
import './User.css';
const userOutput = (props) => {
    return (
        <div className="User">
        <p>User: {props.user}</p>
        </div>
    );
} 

export default userOutput;