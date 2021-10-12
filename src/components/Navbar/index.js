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

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    /**
     * Scrolls to the top when user click on Home in home page
     */
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    /**
     * Scrolls to the section of packages in home page
     */
    const goToPackages = () => {
        // history.push('/')
        scroll.scrollTo(800)
    }

    /**
     * Scrolls to the section of parlours in home page
     */
    const goToParlours = () => {
        history.push('/')
        scroll.scrollTo(1700)
    }

    /**
     * Scrolls to the section of Location in home page
     */
    const goToMap = () => {
        history.push('/')
        scroll.scrollTo(2500)
    }
    /**
     * Scrolls to the section of information in home page
     */
    const goToInfo = () => {
        history.push('/')
        scroll.scrollTo(3400)
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
                                    <NavLinks to={item.link} smooth>
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