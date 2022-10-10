import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonCard = ({name, type, moves}) => {
    return(
        <div>
            <Card style={{width: '18rem'}} border="success">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{type}</Card.Text>
            <ul>
                <li>Move 1</li>
                <li>Move 2</li>
                <li>Move 3</li>
                <li>Move 4</li>
                <Button variant="outline-primary">Like</Button>{' '}
            </ul>
            </Card>
        </div>
    )
}

export default PokemonCard;