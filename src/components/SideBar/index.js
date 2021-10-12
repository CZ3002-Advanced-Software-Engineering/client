import React from 'react'
import { useDispatch } from 'react-redux'
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
import { logOut } from '../../actions/user'

/**
 * This component renders the side bar to show buttons in navbar, when the the page of the website is reduced horizontally
 */
const Sidebar = ({ isOpen, toggle, info }) => {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {info.map((item) => (
                        <SidebarLink
                            key={item.text}
                            to={item.link}
                            onClick={toggle}
                        >
                            {item.text}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/" onClick={handleLogOut}>
                        Log out
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
Sidebar.defaultProps = {
    isOpen: false,
    toggle: false,
    info: [],
}

export default Sidebar