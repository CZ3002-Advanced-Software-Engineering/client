import styled from 'styled-components'

export const SearchTitle = styled.div`
    text-align: center;
    margin-top: 2rem;
    h4 {
        font-size: 2rem;
        //letter-spacing: 3px;
        text-transform: capitalize;
        margin-bottom: 1rem;
    }
    div {
        width: 5rem;
        height: 5px;
        margin: 0 auto;
        background: #01bf71;

        &:last-child {
            margin-bottom: 2rem;
        }
    }
`

export const SearchTitleWrapper = styled.div`
    &:first-of-type {
        margin-top: 8rem;
    }
`