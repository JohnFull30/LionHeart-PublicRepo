import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from './icons/CoHomeIcon.svg'



export default function CoHome2() {
    const navigate = useNavigate()

    return (
        <div className='container mt-0 px-auto py-3 main-container'>
            <p>CoHome2</p>
            <Icon />
        </div>
    )
}