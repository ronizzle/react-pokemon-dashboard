import React from 'react'
import {Modal, Button} from 'react-bootstrap/lib/'
import PokemonInfo from './PokemonInfo'

const PokemonModal = ({toggleModal, showModal, pokemon}) => {

    var name =  ''

    if(pokemon != null) {
        name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    }

    return (
        <div className="modal-container" style={{height: 200}}>
            <Modal
                show={showModal}
                onHide={toggleModal}
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PokemonInfo pokemon={pokemon} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModal.bind(null, pokemon)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PokemonModal