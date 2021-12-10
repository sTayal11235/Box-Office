import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { SearchGrid } from '../styled'

function ShowGrid({data}) {
    return (<SearchGrid>
            {
                data.map(({show}) => <ShowCard key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium : IMAGE_NOT_FOUND} summary={show.summary}/> )
            }
        </SearchGrid>
    )}

export default ShowGrid
