import React from 'react'
import './CompanyApp.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import InputField from './InputField'
import { ReactComponent as Icon } from './icons/CoHomeIcon1.svg'




export default function CoChat() {
    const navigate = useNavigate()
    const width = window.innerWidth
    return (
        <>

            <div className={`${(width > 500) ? 'mt-5 pt-5 top' : 'mb-5 pb-5 bottom'} container px-auto main-container-wNav`}>

                <div className='row'>

                    <h5 className='text-left py-3 col shadow-sm'>Welcome, Rachel👋</h5>
                </div>
                <div className='row'>

                    <h1 className='text-center py-3 col'>Chat</h1>
                </div>
                <div className='row py-2'>

                    <div className='col shadow-sm'>
                        <InputField
                            label='Skills or discipline'
                            type='text'
                            name='skillsOrDiscipline'
                            active='focused'
                        />
                    </div>
                </div>


                <Button onClick={() => {
                    navigate('/Company/2')
                }
                } >CoHome2</Button>
                <div className='row'>

                    <Icon
                        className='companyHomeIcon'
                    />
                    <Icon
                        className='companyHomeIcon'
                    />
                    <Icon
                        className='companyHomeIcon'
                    />

                </div>

            </div>
        </>
    )
}
