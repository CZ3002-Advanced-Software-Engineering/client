import React from 'react'
import * as PropTypes from 'prop-types'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from './SidebarElements'

/**
 * This component renders the side bar to show buttons in navbar, when the the page of the website is reduced horizontally
 */
const Sidebar = ({ isOpen, toggle }) => (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="packages" onClick={toggle}>
                    Packages
                </SidebarLink>
                <SidebarLink to="parlours" onClick={toggle}>
                    Parlours
                </SidebarLink>
                <SidebarLink to="location" onClick={toggle}>
                    Location
                </SidebarLink>
                <SidebarLink to="information" onClick={toggle}>
                    Information
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
)

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.bool,
}

Sidebar.defaultProps = {
    isOpen: false,
    toggle: false,
}

export default Sidebar