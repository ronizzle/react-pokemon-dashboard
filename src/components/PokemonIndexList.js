import React from 'react'
import {ListGroup, ListGroupItem, Col} from 'react-bootstrap/lib/'

import PokeList from './PokeList'
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons'
import PaginationContainer from './PaginationContainer'

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected,
                              pokemons, btnSize, totalPages, activePage, onSelect}) => {
    let style = {display: 'none'}

    if(display) {
        style.display = 'initial'
    } else {
        style.display = 'none'
    }

    return (
        <div>
            <SelectItemsPerPageButtons
                options={options}
                selectedValue={selectedValue}
                allValue={allValue}
                onOptionSelected={onOptionSelected} />

            <PokeList
                pokemons={pokemons}/>

            <PaginationContainer
                btnSize={btnSize}
                totalPages={totalPages}
                activePage={activePage}
                onSelect={onSelect}/>

        </div>
    )
}

export default PokemonIndexList