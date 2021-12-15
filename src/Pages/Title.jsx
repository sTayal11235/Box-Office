import React from 'react'
import { TitleWrapper } from '../component/Title.styled'

function Title({ title, subtitle}) {
    return (
        <TitleWrapper>
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
        </TitleWrapper>
    )
}

export default Title
