import React from "react";
import { useEffect, useState } from "react";



function Info(){

    const [pokemon, setPokemon] = useState([])
    const listedNames = pokemon.map(p => <li>{p.name} - {p.attack}</li>)
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => setPokemon(data.results))
    }, [])
    

    return(
        <div className="poke-list">
            <h1>Pokemon</h1>
            {listedNames}
        </div>
    )


}

export default Info