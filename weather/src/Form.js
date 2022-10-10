import React, { useState} from "react";

function Form({submit, change, input}){
//submit = function to handle submit
//change = function to handle form text changes
//input = state from Info.js to handle value
//setInput = 

    
    return(
       <form onSubmit={submit} >
        <label>
            Enter Pokemon:
            <input onChange={change} type="text" value={input} required/>
        </label>

        <input type="submit" value="Submit"/>
       </form>
    )
}

export default Form