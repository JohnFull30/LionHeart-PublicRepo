import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export default function CoHome3() {
    const navigate = useNavigate()

    return (
        <div className='container mt-0 px-auto py-3 main-container'>
            <p>CoHome3</p>
        </div>
    )
}