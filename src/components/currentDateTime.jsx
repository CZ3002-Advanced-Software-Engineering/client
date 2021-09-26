import React from 'react'
import Clock from 'react-live-clock'

/* eslint-disable react/jsx-boolean-value */

export default function CurrentDateTime() {
    return (
        <Clock
            locale="en-sg"
            format="dddd, MMMM, yyyy, hh:mm:ss A"
            ticking={true}
            timezone="Asia/Singapore"
        />
    )
}
