import React from 'react'
import Title from '../Pages/Title'
import Navigation from './Navigation'

function MainPageLayout({children}) {
    return (
        <div>
            <Title title="Box-Office" subtitle="This Box Office can be used to search for movies and actors"/>
            <Navigation/>
            {children}
        </div>
    )
}

export default MainPageLayout
