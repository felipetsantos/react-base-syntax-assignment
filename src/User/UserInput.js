import React from 'react';
import './User.css';
const userInput = (props) => {
    const style = {
        paddingRight: '5px'
    }
    return (
        <div className="User">
        <label 
        htmlFor="userNameInput"
        style={style}>
            User:
        </label>
         <input
         
         type="text"
         id="userNameInput" 
         onChange={props.changed} value={props.user}/>
        </div>
    )
}

export default userInput