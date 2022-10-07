import React, { useState} from "react";

function Form(){


    const [input, setInput] = useState([])
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInput()
    }
    
    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
        
    return(
       <form>
        <label>
            Enter Pokemon:
            <input onChange={handleInput} type="text" value={input}/>
        </label>

        <input type="submit" value="Submit"/>
       </form>
    )
}

export default Form