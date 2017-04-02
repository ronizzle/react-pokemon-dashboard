import React from 'react'
import {ListGroup, ListGroupItem, Col} from 'react-bootstrap/lib/'


const PokeList = ({pokemons, toggleModal}) => {
    console.log(toggleModal)
    let pokemon = pokemons.map((creature) => {
            return (
                <Col sm={6} md={4} key={creature.name}>
                    <ListGroupItem className='PokeList-item' onClick={toggleModal}>{creature.name}</ListGroupItem>
                </Col>
            )
        }
    )

    return (

        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
            <ListGroup>
                {pokemon}
            </ListGroup>
        </Col>
    )
}
export default PokeList;