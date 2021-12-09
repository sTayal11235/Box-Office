
import React from 'react'
import ActorGrid from './actor/ActorGrid'
import ShowGrid from './show/ShowGrid'

export function RenderResults({ results, isShowChecked }) {
    if(results && results.length === 0){
        return <div>No Results Available</div>
    }
    if(results && results.length > 0){
        return isShowChecked ? <ShowGrid data={results}/> : <ActorGrid data={results} /> 
    }
    return null
}
