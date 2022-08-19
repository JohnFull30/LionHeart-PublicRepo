import React from 'react'
import './CompanyApp.css'
import FeaturedApprentices from './FeaturedApprentices'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from './icons/CoHomeIcon1.svg'
import ApprenticeCard from './ApprenticeCard'



export default function CoHome2() {
    const navigate = useNavigate()
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-4 mx-auto main-container-wNav`}>

                <div className='text-left row'>
                    <div className='col-3 back-btn'
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        &#8701;
                    </div>
                    <h3 className='text-left col-9 shadow-sm'>Website Design</h3>
                </div>

                <div className='row'>

                    <h3 className='text-center py-3 col'>Featured Apprentices</h3>
                </div>
                <div className='row'>
                    <FeaturedApprentices />
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Apprentices</h2>
                    </div>
                </div>
                <div className='row'>
                    <ApprenticeCard />
                </div>
                <div className='row py-4'>
                    <ApprenticeCard />
                </div>




                <Button onClick={() => {
                    navigate('/Company/3')
                }
                } >CoHome3</Button>


            </div>
        </>
    )
}