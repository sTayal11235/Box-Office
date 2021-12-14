import React, {useState} from 'react'
import MainPageLayout from '../component/MainPageLayout'
import { RenderResults } from '../component/RenderResults'
import { getApiResponse } from '../misc/Response'

function Home() {

    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)
    const [searchOption, setSearchOption] = useState('shows')

    const isShowChecked = searchOption === 'shows'

    const inputText = (ev) => {
        setInput(ev.target.value)
    }

    const onSearch = () => {
        getApiResponse(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
        })
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13)
            onSearch()
    }

    const changeSearchOption = (ev) => {
        setSearchOption(ev.target.value)
    }

    return (
        <MainPageLayout>
            <input type="text" placeholder="Search for Shows/Actors" onKeyDown ={onKeyDown} onChange={inputText} value={input}/>
            <button type="button" onClick={onSearch}>Search</button>
            <label htmlFor="shows"><input type="radio" id = 'shows' value="shows" onChange={changeSearchOption} checked={isShowChecked} />Shows</label>
            <label htmlFor="actors"><input type="radio" id = 'actors' value="people" onChange={changeSearchOption} checked={!isShowChecked} />Actors</label>
            <RenderResults results={results } />
        </MainPageLayout>
    )
}

export default Home
