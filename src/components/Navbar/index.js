import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavBarElements'
import { logOut } from '../../actions/user'

/**
 * This component is responsible for the navigation bar.
 * User can click on the navigation bar to scroll to the indiviudal infosection
 * @param {object} toggle The section that users click on
 * @returns the navbar component to be displayed at the top of the web page.
 */
const Navbar = ({ toggle, info }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector((state) => state.user)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const scrollWithOffset = (el) => {
        const y = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = -120
        window.scrollTo({ top: y + yOffset, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    /**
     * Scrolls to the top when user click on Home in home page
     */
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            Home
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            {info.map((item) => (
                                <NavItem key={item.link}>
                                    <NavLinks
                                        to={`/#${item.link}`}
                                        smooth
                                        scroll={(el) => scrollWithOffset(el)}
                                    >
                                        {item.text}
                                    </NavLinks>
                                </NavItem>
                            ))}
                        </NavMenu>
                        {isAuthenticated && (
                            <NavBtn>
                                <NavBtnLink to="/" onClick={handleLogOut}>
                                    Log out
                                </NavBtnLink>
                            </NavBtn>
                        )}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

Navbar.defaultProps = {
    info: [],
    toggle: false,
}

export default Navbar