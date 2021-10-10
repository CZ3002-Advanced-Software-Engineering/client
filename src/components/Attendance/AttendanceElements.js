import styled from 'styled-components'
import { Button } from '../ButtonElements'
// --primaryColor: #af9a7d;
// --mainWhite: #fff;
// --offWhite: #f7f7f7;
// --mainBlack: #222;
// --mainGrey: #ececec;
// --darkGrey: #cfcfcf;
// --mainTransition: all 0.3s linear;
// --mainSpacing: 3px;
// --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
// --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);

export const EmptySearch = styled.div`
    text-align: center;
    text-transform: capitalize;
    margin: 2rem 0;
    padding: 1rem;
    letter-spacing: 3px;
`

export const AttendanceList = styled.section`
    padding: 5rem 0;
`

export const AttendanceListCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
`

export const AttendanceCard = styled.article`
    box-shadow: 2px 5px 3px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
    &:hover {
        box-shadow: 4px 10px 5px 0 rgba(0, 0, 0, 0.5);
    }
`

export const AttendanceLink = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
`

export const PriceTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: all 0.3s linear;
    & h6 {
        margin-bottom: 0;
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: 3px;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    & img {
        width: 100%;
        display: block;
        transition: all 0.3s linear;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
    &:hover img {
        opacity: 0.3;
    }
    &:hover ${PriceTop} {
        opacity: 0;
    }
    &:hover ${AttendanceLink} {
        transform: translate(-50%, -50%) scale(1);
    }
`

export const AttendanceInfo = styled.p`
    background: #01bf71;
    color: black;
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 700;
    letter-spacing: 3px;
`

export const SingleAttendanceContainer = styled.section`
    //padding: 3rem 0 0 0;
    //padding-top: -100px;
`

export const SingleAttendanceImage = styled.div`
    width: 50vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    img {
        width: 100%;
        display: block;
    }
`

export const SingleAttendanceInfo = styled.div`
    width: 80vw;
    display: flex;
    //grid-template-columns: 8ch auto;
    justify-content: space-evenly;
    margin: 2rem auto;
`

export const SingleAttendanceDesc = styled.article`
    margin: 1rem 0;
    h3 {
        text-transform: capitalize;
        letter-spacing: 3px;
        font-size: x-large;
    }
    p {
        line-height: 1.5;
        font-size: medium;
    }
`

export const AttendanceInfor = styled.article`
    margin: 1rem 0;
    h3 h6 {
        text-transform: capitalize;
        letter-spacing: 3px;
    }
    h3 {
        font-size: x-large;
    }
    h6 {
        font-weight: 300;
        font-size: medium;
        line-height: 1.5;
    }
`

export const AttendanceFilterWrapper = styled.section`
    padding: 5rem 0;
`

export const AttendanceFilterForm = styled.form`
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
    @media screen and (min-width: 776px) {
        width: 70vw;
    }
    @media screen and (min-width: 992px) {
        width: 95vw;
        max-width: 1170px;
    }
`

export const AttendanceFilterFormGroup = styled.div`
    text-transform: capitalize;
    label {
        display: block;
        letter-spacing: 3px;
        margin-bottom: 0.5rem;
    }
`

export const AttendanceFilterFormControl = styled.select`
    width: 100%;
    background: transparent;
    font-size: 1rem;
`

export const AttendanceFilterFormInput = styled(
    AttendanceFilterFormControl
).attrs((props) => ({
    as: 'input',
    type: props.type,
}))``

export const AttendanceFilterFormSizeInputWrapper = styled.div`
    display: flex;
`

export const AttendanceFilterFormSizeInput = styled.input.attrs({
    type: 'number',
})`
    width: 40%;
    padding: 0.2rem;
    border: 1px solid black;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
`

export const AttendanceFilterFormExtra = styled.div`
    label {
        display: inline-block;
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }
`