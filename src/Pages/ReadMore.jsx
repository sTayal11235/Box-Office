/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useParams } from 'react-router-dom'
import { InfoBlock, ShowPageWrapper } from '../component/Show.styled'
import Cast from '../component/show/Cast'
import Details from '../component/show/Details'
import Seasons from '../component/show/Seasons'
import ShowMainData from '../component/show/ShowMainData'
import { useReadMore } from '../misc/CustomHook'

const ReadMore = () => {
    const { id } = useParams()

    const { moreInfo, isLoading, error } = useReadMore(id)

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
