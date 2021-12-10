import React from 'react'
import ActorCard from './ActorCard'
import NotFound from '../../image/not-found.png'
import { SearchGrid } from '../styled'

const ActorGrid = ({ data }) => {
    return (<SearchGrid>
            {
                data.map(({person}) => <ActorCard key={person.id} name={person.name} image={person.image ? person.image.medium : NotFound} country={person.country?person.country.name:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender} /> )
            }
        </SearchGrid>
    )}

export default ActorGrid
