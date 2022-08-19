import React from 'react'
import './CompanyApp.css'
import FeaturedApprentices from './FeaturedApprentices'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { ReactComponent as Icon } from './icons/CoHomeIcon1.svg'
import ApprenticeCard from './ApprenticeCard'
import BidCard from './BidCard'




export default function CoHome3() {
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
                    <h3 className='text-left col-9 shadow-sm'>Johnathan Fuller</h3>
                </div>

                <div className='row py-3'>

                    <ApprenticeCard blue={true} />

                </div>

                <div className='row py-3'>
                    <div className='col d-flex justify-content-between text-danger'>
                        <p>Somebody out bided you!</p>
                        <p>!</p>

                    </div>
                </div>
                <div className='row'>
                    <BidCard />
                </div>





                <Button onClick={() => {
                    navigate('/Company/4')
                }
                } >CoHome4</Button>


            </div>
        </>
    )
}