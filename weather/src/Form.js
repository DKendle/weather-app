import React, { useState} from "react";


function Form(){


    const [input, setInput] = useState([])

    const handleSubmit = () => {

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