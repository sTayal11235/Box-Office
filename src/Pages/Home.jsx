import React, {useState, useCallback} from 'react'
import CustomRadio from '../component/CustomRadio'
import MainPageLayout from '../component/MainPageLayout'
import { RenderResults } from '../component/RenderResults'
import { usePersistedQuery } from '../misc/CustomHook'
import { getApiResponse } from '../misc/Response'
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled'

function Home() {

    const [input, setInput] = usePersistedQuery()
    const [results, setResults] = useState(null)
    const [searchOption, setSearchOption] = useState('shows')

    const isShowChecked = searchOption === 'shows'

    const inputText = useCallback( (ev) => {
        setInput(ev.target.value)
    }, [setInput])

    const onSearch = () => {
        getApiResponse(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result)
        })
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13)
            onSearch()
    }

    const changeSearchOption = useCallback((ev) => {
        setSearchOption(ev.target.value)
    }, [])
    return (
        <MainPageLayout>
            <SearchInput type="text" placeholder="Search for Shows/Actors" onKeyDown ={onKeyDown} onChange={inputText} value={input}/>

            <RadioInputsWrapper>
                <div>
                    <CustomRadio lable='Shows' id = 'shows' value="shows" onChange={changeSearchOption} checked={isShowChecked} />
                </div>
                <div>
                    <CustomRadio lable='Actors' id = 'actors' value="people" onChange={changeSearchOption} checked={!isShowChecked} />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            <RenderResults results={results } />
        </MainPageLayout>
    )
}

export default Home
