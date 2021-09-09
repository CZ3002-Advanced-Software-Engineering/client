import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Toolbar } from '@material-ui/core'

const Navbar = () => {
    const [value, setValue] = useState(0)

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>FRAS</Typography>

                    <Tabs
                        onChange={handleClickTab}
                        indicatorColor="secondary"
                        value={value}
                    >
                        <Tab disableRipple label="Home" />
                        <Tab disableRipple label="View Attendance" />
                        <Tab disableRipple label="Submit Documents" />
                        <Tab disableRipple label="Account" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
