import React from 'react';
const userInput = (props) => {
    const styleLabel = {
        paddingRight: '5px'
    }
    const styleContainer = {
        backgroundColor: '#eee',
        padding:'20px 5px 20px 5px',
        width:'30%',
        margin:'10px auto',
        border: '1px solid #eee'
    }
    return (
        <div style={styleContainer}>
        <label 
        htmlFor="userNameInput"
        style={styleLabel}>
            User:
        </label>
         <input
         type="text"
         id="userNameInput" 
         onChange={props.changed} 
         value={props.userName}/>
        </div>
    )
}

export default userInput