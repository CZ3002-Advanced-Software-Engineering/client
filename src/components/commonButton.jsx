import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CommonButton = ({
    variant,
    size,
    type,
    className,
    handleClick,
    text,
}) => (
    <Button
        variant={variant}
        size={size}
        type={type}
        className={className}
        onClick={handleClick}
    >
        {text}
    </Button>
)

CommonButton.propTypes = {
    handleClick: PropTypes.func,
}

CommonButton.defaultProps = {
    handleClick: () => {},
}

export default CommonButton
