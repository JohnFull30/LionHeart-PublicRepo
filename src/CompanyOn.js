import React from 'react'
import './CompanyApp.css'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export default function Company() {
  const [inputFields, setInputFields] = React.useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setInputFields(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log('state: ', inputFields)

  }
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

        <h1 className='text-left py-5 col'>Become a human empowerment company</h1>
      </div>
      <div className='row pb-5'>
        <div className='col'>
          <InputField
            label='Your email'
            type='email'
            name='email'
            active='focused'
          />
        </div>
      </div>
      <div className='row pb-5'>
        <div className='col'>
          <InputField
            label='Password'
            type='password'
            name='password'
          />
        </div>
      </div>
      <div className='row pb-5'>
        <div className='col'>
          <InputField
            label='Repeat password'
            type='password'
            name='password'
          />
        </div>
      </div>
      <div className='row pb-3 pt-2'>
        <div className='col'>
          <Button
            onClick={() => {
              navigate(`/onboarding-C/1`)
            }}
            className='main-btn'
            color='primary'
            size='lg'
            block
          >
            Create account
          </Button>
        </div>
      </div>
      <div className='row pb-3 pt-2'>
        <div className='col'>
          <p className='text-center detail-text'>Already have an account? <span>Log In</span></p>
        </div>
      </div>


    </div>
  )
}
