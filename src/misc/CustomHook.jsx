/* eslint-disable no-console */
import {useState, useReducer, useEffect, useRef, useCallback} from 'react'
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

    const setLastQuery = useCallback( lastQ => {
        setQuery(lastQ)
        sessionStorage.setItem(key, JSON.stringify(lastQ))
    }, [key])

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

        setTimeout( () => {
            getApiResponse(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(res => {
                if(isMounted){
                    dispatch({type: 'FETCH_SUCCESS', showMore: res})
                }
                
            }).catch(err => {
                if(isMounted){
                    dispatch({type: 'FETCH_ERROR', error: err.message})
                }
            })
        }, 1000)

        return () => {
            isMounted = false
        }
    } , [showId])

    return state
}

export function useWhyDidYouUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef();
  
    useEffect(() => {
      if (previousProps.current) {
        // Get all keys from previous and current props
        const allKeys = Object.keys({ ...previousProps.current, ...props });
        // Use this object to keep track of changed props
        const changesObj = {};
        // Iterate through keys
        allKeys.forEach((key) => {
          // If previous is different from current
          if (previousProps.current[key] !== props[key]) {
            // Add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        });
  
        // If changesObj not empty then output to console
        if (Object.keys(changesObj).length) {
          console.log("[why-did-you-update]", name, changesObj);
        }
      }
  
      // Finally update previousProps with current props for next hook call
      previousProps.current = props;
    });
  }