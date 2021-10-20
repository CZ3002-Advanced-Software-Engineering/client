import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const InfoCardContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ backgroundColor }) =>
        backgroundColor ? '#f9f9f9' : '#010606'};
    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const InfoCardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 10px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } ;
`

// export const ServicesCard = styled.div`
export const InfoCard = styled(LinkR)`
    //background: white;
    background: ${({ boxColor }) => (boxColor ? '#f9f9f9' : '#010606')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        text-decoration: none;
    }
`

export const InfoCardIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const InfoCardH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({ headerColor }) => (headerColor ? '#f9f9f9' : '#010606')};
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    } ;
`

export const InfoCardH2 = styled.h2`
    color: ${({ boxHeaderColor }) => (boxHeaderColor ? '#01bf71' : '#01bf71')};
    font-size: 1rem;
    margin-bottom: 10px;
`

export const InfoCardP = styled.p`
    color: ${({ boxTextColor }) => (boxTextColor ? '#f9f9f9' : '#010606')};
    font-size: 1rem;
    text-align: center;
`