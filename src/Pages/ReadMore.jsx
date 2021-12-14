/* eslint-disable no-underscore-dangle */
import React,{ useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { InfoBlock, ShowPageWrapper } from '../component/Show.styled'
import Cast from '../component/show/Cast'
import Details from '../component/show/Details'
import Seasons from '../component/show/Seasons'
import ShowMainData from '../component/show/ShowMainData'
import { getApiResponse } from '../misc/Response'

const reducer = (prev, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS': {
            return {...prev, isLoading: false, moreInfo: action.showMore}
        }
        case 'FETCH_ERROR': {
            return {...prev, error: action.error, isLoading: false}
        }
        default: return prev
    }
}

const initialState = {
    moreInfo: null,
    isLoading: true,
    error: null
}


const ReadMore = () => {
    const { id } = useParams()
    // const [moreInfo, setMoreInfo] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(null)

    const [{moreInfo, isLoading, error}, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        let isMounted = true;

        getApiResponse(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res => {
            if(isMounted){
                dispatch({type: 'FETCH_SUCCESS', showMore: res})
            }
            
        }).catch(err => {
            if(isMounted){
                dispatch({type: 'FETCH_ERROR', error: err.message})
            }
        })

        return () => {
            isMounted = false
        }
    } , [id])

    if(isLoading){
        return (<div>Loading Page</div>)
    }
    if(error){
        return (<div>{error}</div>)
    }
    return (<ShowPageWrapper>
        <ShowMainData image={moreInfo.image} name={moreInfo.name} rating={moreInfo.rating} summary={moreInfo.summary} genres={moreInfo.genres} />

        <InfoBlock>
            <h2>Details</h2>
            <Details status={moreInfo.status} network={moreInfo.network} premiered={moreInfo.premiered} />
        </InfoBlock>

        <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={moreInfo._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
            <h2>Casts</h2>
            <Cast cast={moreInfo._embedded.cast} />
        </InfoBlock>

    </ShowPageWrapper>)
}

export default ReadMore
