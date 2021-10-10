import React, { useState } from 'react'
import Video from '../../videos/video1.mp4'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
} from './HeroElements'
import { Button, ButtonScroll } from '../ButtonElements'

/**
 * This component is for the hero section of the webpage. The videos and scrolling of the button.
 * @param {object} {HeroHeader, HeroPara, getStartedButton, scroll}
 * @returns HeroSection component of the webpage
 */
const HeroSection = ({ HeroHeader, HeroPara, getStartedButton, scroll }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
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
                            offset={-220}
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