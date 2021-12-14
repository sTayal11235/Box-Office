import {useReducer, useEffect} from 'react'

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