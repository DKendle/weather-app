import React from "react";
import { useEffect, useState } from "react";
import PokemonCard from './PokemonCard'
import Form from "./Form"

function Info(){

    const [pokemon, setPokemon] = useState([])
    const [attacks, setAttacks] = useState([])
    const [formInput, setFormInput] = useState([])
    const [newSearch, setNewSearch] = useState(" ")

    //const listedPokes = pokemon.map(p => <li key={p.name}>{p.name}</li>)
    const pokeCards = pokemon.map(p => <PokemonCard name={p.name} />
    )
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const newUrl = (url + newSearch)


//last entered letter not being set in newUrl
    const handleChange = (e) => {
        setFormInput(e.target.value)
        setNewSearch(formInput)
        console.log("handleChange")
    }
       
    const handleSubmit = (e) => {
        console.log(newUrl)
        e.preventDefault()
    }
 
    useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(data => setPokemon(data.results))
    }, [])
    

//????Use Form input to do dynamic searches    

    //<PokemonCard /> Hard codes props for example
    //change props with state data
    return(
        <div>
            <Form submit={handleSubmit} change={handleChange} input={formInput} />
            <div className="poke-list">
            <h1>Pokemon</h1>
            {pokeCards}
            </div>
        </div>
    )

}

export default Info