import React from "react";
import { useEffect, useState } from "react";
import PokemonCard from './PokemonCard'


function Info(){

    const [pokemon, setPokemon] = useState([])
    const [attacks, setAttacks] = useState([])
    const listedPokes = pokemon.map(p => <li>{p.name}</li>)
    const pokeCards = pokemon.map(p => <PokemonCard name={p.name} />
    )
    
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => setPokemon(data.results))
    }, [])
    

    //<PokemonCard /> Hard codes props for example
    //change props with state data
    return(
        <div className="poke-list">
            <h1>Pokemon</h1>
            {pokeCards}
            {listedPokes}
        </div>
    )


}

export default Info