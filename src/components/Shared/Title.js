import React from 'react'
import { SearchTitle, SearchTitleWrapper } from './TitleElements'

const Title = ({ title }) => (
    <SearchTitleWrapper>
        <SearchTitle>
            <h4>{title}</h4>
            <div />
        </SearchTitle>
    </SearchTitleWrapper>
)

export default Title