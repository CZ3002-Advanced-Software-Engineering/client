import { nonMaxSuppression } from 'face-api.js'
import React from 'react'
import { useSelector } from 'react-redux'
import {
    InfoCard,
    InfoCardContainer,
    InfoCardH1,
    InfoCardH2,
    InfoCardIcon,
    InfoCardP,
    InfoCardWrapper,
} from './InfoCardElements'

/**
 * This component displays the individual boxes for location and information.
 * Renders the box, image and name of each individual box.
 * @param {*} param0
 * @returns Services component.
 */
const InfoCards = ({
    id,
    backgroundColor,
    headerColor,
    boxColor,
    boxHeaderColor,
    boxTextColor,
    header,
    boxes,
}) => {

    const { course, index, date } = useSelector(
        (state) => state.selectedAttendance
    )


    return(
    <InfoCardContainer id={id} backgroundColor={backgroundColor}>
        <InfoCardH1 headerColor={headerColor}>{header}</InfoCardH1>
        <InfoCardWrapper>
            {boxes.map((box) => (
                <InfoCard to={box.path} boxColor={boxColor} key={box.id} 
                style={{pointerEvents: 
                    (box.header === "Edit" && date && course && index) ||
                    (box.header === "Facial Recognition" && course && index && date==="") ||
                    (box.header === "Manual" && course && index && date==="")
                ? 'auto' :'none'}}>
                    <InfoCardIcon src={box.img} alt={box.alt} />
                    <InfoCardH2 boxHeaderColor={boxHeaderColor}>
                        {box.header}
                    </InfoCardH2>
                    <InfoCardP boxTextColor={boxTextColor}>
                        {box.text}
                    </InfoCardP>
                </InfoCard>
            ))}
        </InfoCardWrapper>
    </InfoCardContainer>
)}

InfoCards.defaultProps = {
    boxes: [],
}

export default InfoCards