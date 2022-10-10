import React, { useState} from "react";

function Form(){


    const [input, setInput] = useState([])
    const [userInput, setUserInput] = useState("")

        
    const handleChange = (e) => {
        setInput(e.target.value)
    }
       
    const handleSubmit = (e) => {
        console.log({input})

        e.preventDefault()
    }
 
    return(
       <form onSubmit={handleSubmit} >
        <label>
            Enter Pokemon:
            <input onChange={handleChange} type="text" value={input} required/>
        </label>

        <input type="submit" value="Submit"/>
       </form>
    )
}

export default Form