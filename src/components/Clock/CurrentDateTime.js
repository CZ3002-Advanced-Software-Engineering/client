import React from 'react'
import Clock from 'react-live-clock'


const CurrentDateTime = () => {
    const x = 1
    return (
        <Clock 
            locale="en-sg"
            format="dddd, MMMM, D, yyyy, hh:mm:ss A"
            ticking
            timezone="Asia/Singapore" 
            style = {{position: 'relative', top:'20px', alignItems: 'center', display: 'flex', justifyContent: 'center'}}           
        />
    )
}

export default CurrentDateTime


