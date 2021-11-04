import React, { useState } from 'react'
import {
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
} from './HeroElements'
import { Button, ButtonScroll } from '../ButtonElements'

/**
 * General UI for webpage
 * @param {String} HeroHeader - Header
 * @param {String} HeroPara - Paragraph
 * @param getStartedButton - Button
 * @param {Boolean} scroll - True or false for react scroll
 * @returns {JSX.Element} - UI for general section
 */
const HeroSection = ({ HeroHeader, HeroPara, getStartedButton, scroll }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            {/* <HeroBg>
                <img src={Image} alt="" />
            </HeroBg> */}
            <HeroContent>
                <HeroH1>{HeroHeader}</HeroH1>
                <HeroP>{HeroPara}</HeroP>
                <HeroBtnWrapper>
                    {scroll ? (
                        <ButtonScroll
                            to={getStartedButton}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            smooth
                            offset={-120}
                        >
                            Get started
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </ButtonScroll>
                    ) : (
                        <Button
                            to={getStartedButton}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                        >
                            Get started
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    )}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection