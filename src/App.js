import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: []
        }
        this.loadPokemons = this.loadPokemons.bind(this)
    }

    loadPokemons(url) {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {
                this.setState({
                    pokemons: json.results
                })
            }).catch(err => {
                console.log(err)
        })
    }

    componentWillMount() {
        this.loadPokemons('http://pokeapi.co/api/v2/pokemon')
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
