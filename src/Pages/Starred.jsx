import React, { useEffect, useState } from 'react'
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
            Promise.all(allStarredPromises).then(apiData => apiData.map(show => ({ show })))
            .then(result => {
                setShows(result)
                setIsLoading(false)
            }).catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
        }
        else{
            setIsLoading(false)
        }
    }, [starred])

    console.log(shows)
    return (
        <MainPageLayout>
            { isLoading && <div>Loading Starred Shows.</div>}
            { error && <div>An Error Occurred: {error} </div>}
            { !shows && !isLoading && <div>No Shows Were Starred</div>}
            { !error && !isLoading && shows && <ShowGrid data={shows}/>}
        </MainPageLayout>
    )
}

export default Starred
