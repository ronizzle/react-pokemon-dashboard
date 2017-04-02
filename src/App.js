import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import {Col, Pagination} from 'react-bootstrap/lib/'
import PokemonIndexList from './components/PokemonIndexList'
import PokemonModal from './components/PokemonModal'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            activePage: 1,
            limit: 50,
            offset: 0,
            totalPages: 0,
            count: 0,
            loaded: false,
            showModal: false,
            selectedPokemon: null
        }

        this.handlePaginationSelect = this.handlePaginationSelect.bind(this)
        this.loadPokemons = this.loadPokemons.bind(this)
        this.handleLimitChange = this.handleLimitChange.bind(this)
        this.toggleModal = this.toggleModal.bind(this)

    }

    toggleModal(pokemon) {
        if(!this.state.showModal) {

            if(pokemon.url !== undefined) {
                fetch(`${pokemon.url}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(json => {

                        this.setState({
                            selectedPokemon: json,
                            showModal: !this.state.showModal
                        })
                    })
                    .catch(err => {
                        console.log("Something went wrong with your pokemon err")
                    })
            }
        } else {
            this.setState({
                selectedPokemon: null,
                showModal: !this.state.showModal
            })
        }
    }

    handleLimitChange(event) {
        this.setState({
            limit: +event.target.innerHTML || this.state.count,
            activePage: 1
        }, () => {
            this.loadPokemons(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${this.state.offset}&offset=0`)
        })
    }

    handlePaginationSelect(selectedPage) {
        let offset = this.state.limit * (selectedPage - 1)
        this.loadPokemons(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${offset}`)
        this.setState({
            activePage: selectedPage
        })
    }

    loadPokemons(url) {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {

            let pages = Math.round(json.count / this.state.limit)

            this.setState({
                pokemons: json.results,
                totalPages: pages,
                count: json.count,
                loaded: true
            })

        }).catch(err => {
            console.log(err)
        })
    }

    componentWillMount() {
        this.loadPokemons(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=0`)
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>PokeDashboard</h2>
                </div>


                {this.state.loaded ? null : "Loading..."}
                <PokemonIndexList
                    display={this.state.loaded}
                    options={[10,50,100,200]}
                    selectedValue={this.state.limit}
                    allValue={this.state.count}
                    onOptionSelected={this.handleLimitChange}
                    pokemons={this.state.pokemons}
                    bsSize="small"
                    items={this.state.totalPages}
                    activePage={this.state.activePage}
                    onSelect={this.handlePaginationSelect}
                    totalPages={this.state.totalPages}
                    toggleModal={this.toggleModal}
                />

                <PokemonModal toggleModal={this.toggleModal}
                              pokemon={this.state.selectedPokemon}
                              showModal={this.state.showModal}/>
            </div>
        );
    }
}

export default App;
