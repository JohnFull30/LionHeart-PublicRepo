import React from 'react'
import InputField from './InputField'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLogo}  from './icons/ArrowIcon6.svg'


export default function Company6() {
    const navigate = useNavigate()

    return (
        <div className='container mt-0 px-auto py-3 main-container'>
            <div className='text-left row'>
                <div className='col back-btn'
                    onClick={() => {
                        navigate(-1)
                    }}
                >
                    &#8701; Back
                </div>
            </div>
            <div className='row'>

                <h1 className='text-center py-5 col'>What skillsets are you looking for?</h1>
            </div>

            <div className='row pb-5 text-center'>
                <label className='text-left' htmlFor='companyDescription'>Briefly describe your company</label>
                <div className='col'>
                    <textarea  name='companyDescription' placeholder='Enter your text here...' rows='3'></textarea>
                </div>
            </div>
          
            <div className='row pb-3 pt-2'>
                <div className='col'>
                    <ArrowLogo 
                    className='arrowLogo' 
                    onClick={() => {
                        console.log('Company page')
                    }}/>
                </div>
            </div>
        </div>
    )
}
