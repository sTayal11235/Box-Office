import React from 'react'
import ActorCard from './ActorCard'
import NotFound from '../../image/not-found.png'

function ActorGrid({ data }) {
    return (<div>
            {
                data.map(({person}) => <ActorCard key={person.id} name={person.name} image={person.image ? person.image.medium : NotFound} country={person.country?person.country.name:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} /> )
            }
        </div>
    )}

export default ActorGrid
