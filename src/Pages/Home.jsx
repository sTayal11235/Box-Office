import React, {useState} from 'react'
import MainPageLayout from '../component/MainPageLayout'

function Home() {

    const [input, setInput] = useState('')

    const inputText = (ev) => {
        setInput(ev.target.value)
    }

    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(response => response.json()).then(result => console.log(result))
    }

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13)
            onSearch()
    }

    return (
        <MainPageLayout>
            <input type="text" onKeyDown ={onKeyDown} onChange={inputText} value={input}/>
            <button type="button" onClick={onSearch}>Search</button>
        </MainPageLayout>
    )
}

export default Home
