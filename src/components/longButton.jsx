import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const LongButton = ({ text, type, variant, color, className, handleClick }) => {
    const handleSubmit = () => {
        handleClick()
    }
    return (
        <Button
            type={type}
            fullWidth
            variant={variant}
            color={color}
            className={className}
            onClick={() => console.log('hello')}
        >
            {text}
        </Button>
    )
}

// LongButton.propTypes = {
//     handleClick: PropTypes.func,
// }

// LongButton.defaultProps = {
//     handleClick: () => {},
// }

export default LongButton
