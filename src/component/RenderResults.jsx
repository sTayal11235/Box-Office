import React from 'react'

export function RenderResults({ results, isShowChecked }) {
    if(results && results.length === 0){
        return <div>No Results Available</div>
    }
    if(results && results.length > 0){
        return isShowChecked ? 
        <div>{results.map(result => (<div key={result.show.id}>{result.show.name}</div>))}</div>
        : <div>{results.map(result => (<div key={result.person.id}>{result.person.name}</div>))}</div>
    }
    return null
}
