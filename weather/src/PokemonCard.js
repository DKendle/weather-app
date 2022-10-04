import React from 'react';


const PokemonCard = ({name, type}) => {
    return(
        <div class="poke-card">
            <h1>{name}</h1>
            <p>{type}</p>
            <ul>
                <li>Move 1</li>
                <li>Move 2</li>
                <li>Move 3</li>
                <li>Move 4</li>

            </ul>


        </div>
    )
}

export default PokemonCard;