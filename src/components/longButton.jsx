import React from 'react'
import Button from '@material-ui/core/Button'

const LongButton = ({ text, type, variant, color, className }) => (
    <Button
        type={type}
        fullWidth
        variant={variant}
        color={color}
        className={className}
    >
        {text}
    </Button>
)

export default LongButton