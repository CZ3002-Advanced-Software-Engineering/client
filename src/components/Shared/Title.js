import React from 'react'
import { SearchTitle, SearchTitleWrapper } from './TitleElements'

/**
 * General function for the UI of a title
 * @param {String} title - Title Name
 * @returns {JSX.Element} - UI for the title
 * @constructor
 */
const Title = ({ title }) => (
    <SearchTitleWrapper>
        <SearchTitle>
            <h4>{title}</h4>
            <div />
        </SearchTitle>
    </SearchTitleWrapper>
)

export default Title