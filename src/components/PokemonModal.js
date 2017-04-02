import React from 'react'
import {Modal, Button} from 'react-bootstrap/lib/'

const PokemonModal = ({toggleModal, showModal, pokemon}) => {

    var name =  ''

    if(pokemon != null) {
        name = pokemon.name
    }

    return (
        <div className="modal-container" style={{height: 200}}>
            <Modal
                show={showModal}
                onHide={toggleModal}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PokemonModal