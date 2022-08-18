import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from './icons/CoHomeIcon.svg'



export default function CoHome2() {
    const navigate = useNavigate()
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>


                <p>CoHome2</p>
                <Icon
                    className='companyHomeIcon'

                />
            </div>
        </>
    )
}