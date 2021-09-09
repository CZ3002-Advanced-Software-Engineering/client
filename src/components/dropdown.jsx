import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(1),
        display: 'flex',
    },
}))

function Dropdown({ labelId, id, menuItems }) {
    const classes = useStyles()

    const [value, setValue] = React.useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel required>Domain</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                value={value}
                onChange={handleChange}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Dropdown
