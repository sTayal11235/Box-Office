/* eslint-disable react-hooks/rules-of-hooks */
import React, {useCallback} from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { SearchGrid } from '../styled'
import { useShowHook } from '../../misc/CustomHook'

function ShowGrid({data}) {

    const [starredShows, dispatchStarredShows] = useShowHook()

    return (<SearchGrid>
            {
                data.map(({show}) => {
                    const isStarred = starredShows.includes(show.id)

                    const addRemoveShows = useCallback(() => {
                        if(isStarred){
                            dispatchStarredShows({type: 'REMOVE', showId: show.id})
                        }
                        else{
                            dispatchStarredShows({type: 'ADD', showId: show.id})
                        }
                    }, [isStarred, show.id])

                    return <ShowCard addRemoveShows={addRemoveShows} isStarred={isStarred} key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium : IMAGE_NOT_FOUND} summary={show.summary}/>
                })
            }
        </SearchGrid>
    )}

export default ShowGrid
