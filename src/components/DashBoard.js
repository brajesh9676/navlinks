import React from 'react'
import { useLocation } from 'react-router-dom'

export default function DashBoard() {
    let location=useLocation()
    console.log(location)
    return (
        <div>
            <h1>{location.state.convertData.firstName} </h1>
            <h1>dashbord</h1>

        </div>
    )
}
