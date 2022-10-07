import React from 'react';
import {Button} from 'react-bootstrap';


const PokemonCard = ({name, type, moves}) => {
    return(
        <div class="poke-card">
            <h1>{name}</h1>
            <p>{type}</p>
            <ul>
                <li>Move 1</li>
                <li>Move 2</li>
                <li>Move 3</li>
                <li>Move 4</li>
                <Button variant="outline-primary">Like</Button>{' '}
            </ul>


        </div>
    )
}

export default PokemonCard;