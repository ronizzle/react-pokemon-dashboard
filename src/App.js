import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList'
import { Col, Pagination } from 'react-bootstrap/lib/'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            activePage: 0,
            limit: 50,
            offset: 0,
            totalPages: 0
        }
        this.handlePaginationSelect = this.handlePaginationSelect.bind(this)
        this.loadPokemons = this.loadPokemons.bind(this)
    }

    handlePaginationSelect(event) {
        let offset = this.state.limit * (event - 1)
        this.loadPokemons(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${offset}`)
    }

    loadPokemons(url) {
        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {

                console.log(json)

                let pages = Math.round(json.count / this.state.limit)

                this.setState({
                    pokemons: json.results,
                    totalPages: pages,
                    count: json.count
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

                <Col sm={8} md={10} smOffset={2} mdOffset={2}>
                    <PokeList pokemons={this.state.pokemons} />
                </Col>

                <Col sm={12}>
                    <Pagination
                        bsSize="small"
                        items={this.state.totalPages}
                        activePage={this.state.activePage}
                        onSelect={this.handlePaginationSelect}
                    />
                </Col>
            </div>
        );
    }
}

export default App;
