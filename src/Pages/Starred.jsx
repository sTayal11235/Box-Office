import React, { useEffect, useState } from 'react'
import Loading from '../component/Loader'
import MainPageLayout from '../component/MainPageLayout'
import ShowGrid from '../component/show/ShowGrid'
import { useShowHook } from '../misc/CustomHook'
import { getApiResponse } from '../misc/Response'

function Starred() {

    const [starred] = useShowHook()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ shows, setShows ] = useState(null)

    useEffect(() => {
        if(starred && starred.length > 0){
            const allStarredPromises = starred.map(showId => getApiResponse(`/shows/${showId}`))
            setTimeout(            Promise.all(allStarredPromises).then(apiData => apiData.map(show => ({ show })))
            .then(result => {
                setShows(result)
                setIsLoading(false)
            }).catch(err => {
                setError(err.message)
                setIsLoading(false)
            }), 1000)
        }
        else{
            setIsLoading(false)
        }
    }, [starred])

    return (
        <MainPageLayout>
            { isLoading && <Loading/>}
            { error && <div>An Error Occurred: {error} </div>}
            { !shows && !isLoading && <div>No Shows Were Starred</div>}
            { !error && !isLoading && shows && <ShowGrid data={shows}/>}
        </MainPageLayout>
    )
}

export default Starred
