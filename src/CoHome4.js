import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export default function CoHome4() {
    const navigate = useNavigate()
    const width = window.innerWidth

    return (
        <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>

            <p>CoHome4</p>
        </div>
    )
}