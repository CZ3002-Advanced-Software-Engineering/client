import React from 'react'
import Button from '@material-ui/core/Button'

const shortButton = ({ text, type, variant, color, className }) => (
    <Button type={type} variant={variant} color={color} className={className}>
        {text}
    </Button>
)

export default shortButton
