import {useState, useReducer, useEffect} from 'react'
import {getApiResponse} from './Response'

function showReducer(prev, action){
    switch(action.type){
        case 'ADD': {
            return [...prev, action.showId]
        }

        case 'REMOVE': {
            return prev.filter(showId => showId !== action.showId)
        }

        default : 
            return prev
    }
}

function usePersistedReducer(reducer, initialState, key){

    const [ state, dispatch ] = useReducer(reducer, initialState, initial => {
        const persist = localStorage.getItem(key)

        return persist ? JSON.parse(persist) : initial
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [ state, dispatch ]
}

export function useShowHook(key='shows'){
    return usePersistedReducer(showReducer, [], key)
}

export function usePersistedQuery(key='lq'){
    const [query, setQuery] = useState(()=> {
        const persist = sessionStorage.getItem(key)
        return persist? JSON.parse(persist):""
    })

    const setLastQuery = lastQ => {
        setQuery(lastQ)
        sessionStorage.setItem(key, JSON.stringify(lastQ))
    }

    return [query, setLastQuery]
}

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

export function useReadMore(showId){

    const [state, dispatch] = useReducer(reducer, {
        moreInfo: null,
        isLoading: true,
        error: null
    })

    useEffect(() => {
        let isMounted = true;

        getApiResponse(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(res => {
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
    } , [showId])

    return state
}