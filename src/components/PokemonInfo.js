import React from 'react'
import { Radar } from 'react-chartjs'

const PokemonInfo = ({pokemon}) => {

    if(pokemon == null) {
        return (
            <div></div>
        )
    }

    const labels = pokemon.stats.map((info) => {
        return info.stat.name
    })

    const data = pokemon.stats.map((info) => {
        return info.base_stat
    })

    let chartData = {
        labels: labels,
        datasets: [
            {
                data: data,

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }

    return (
        <div>
            <img src={pokemon.sprites.front_default} />
            <Radar data={chartData} width="300" height="250" />
        </div>
    )
}


export default PokemonInfo