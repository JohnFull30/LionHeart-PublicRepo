import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from './icons/CoHomeIcon.svg'
import Navbar from './Navbar'




export default function CoHome() {
    const navigate = useNavigate()
    const width = window.innerWidth
    console.log('width: ', width)
    return (
        <>

            <Navbar />
            <div className={`${(width > 500) ? 'navtop' : 'navbottom'} container px-auto py-3 main-container-wNav`}>
                <p>CoHome</p>
                <Button onClick={() => {
                    navigate('/Company/2')
                }
                } >CoHome2</Button>
                <div className='row'>
                    {/* <div className='col'> */}
                    <Icon className='companyHomeIcon' />
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
