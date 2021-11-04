import React, { useEffect, useState } from 'react'
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
 * Function to display UI for selection of taking attendance
 * @param id - id
 * @param backgroundColor - Background color
 * @param headerColor - Header color
 * @param boxColor - Box color
 * @param boxHeaderColor - Box header color
 * @param boxTextColor - Box test color
 * @param header - header text
 * @param boxes - boxes to be placed in the element
 * @returns {JSX.Element} - UI for the boxes
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

    const [test, setTest] = useState(false)

    const { indexes, isFetched } = useSelector((state) => state.course)
    const myDate = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
        new Date().getDay()
    ]

    // const myDate = 'Thu'
    useEffect(() => {
        setTest(indexes.find((item) => item.group === index)?.day === myDate)
    }, [index, indexes, isFetched])

    return (
        <InfoCardContainer id={id} backgroundColor={backgroundColor}>
            <InfoCardH1 headerColor={headerColor}>{header}</InfoCardH1>
            <InfoCardWrapper>
                {boxes.map((box) => (
                    <InfoCard
                        to={box.path}
                        boxColor={boxColor}
                        key={box.id}
                        style={{
                            pointerEvents:
                                (box.header === 'Edit' &&
                                    date &&
                                    course &&
                                    index) ||
                                (box.header === 'Facial Recognition' &&
                                    course &&
                                    index &&
                                    date === '' &&
                                    test) ||
                                (box.header === 'Manual' &&
                                    course &&
                                    index &&
                                    date === '' &&
                                    test)
                                    ? 'auto'
                                    : 'none',
                        }}
                    >
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
    )
}

InfoCards.defaultProps = {
    boxes: [],
    indexes: [],
}

export default InfoCards