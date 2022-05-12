import React, {useState} from 'react'
import {useStateContext} from '../context/userContext'

const Login = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {login} = useStateContext()
  return (
    <div className='relative justify-center overflow-hidden place-content-center w-screen h-screen'>
      <img className='w-screen h-screen opacity-50' src='https://www.hoopermedicalcentre.com.au/wp-content/uploads/2021/06/full-body-checkup.jpeg'/>
      <div className='w-60 h-60 border-2 border-black center'>
      <div className='absolute h-64 align-center place-content-center items-center top-0 bottom-0 my-auto left-0 right-0 mx-auto w-44 space-y-2 '>
        <h1>Login</h1>
        <input className='w-40 px-2 py-2 bg-white rounded-lg' placeholder='name' value={name} onChange={(e) => {setname(e.target.value)}} />
        <input className='w-40 px-2 py-2 bg-white rounded-lg' placeholder='email' value={email} onChange={(e) => {setemail(e.target.value)}} />
        <input className='w-40 px-2 py-2 bg-white rounded-lg' placeholder='password' type='password' value={password} onChange={(e) => {setpassword(e.target.value)}} />
        <input onClick={() => login(name, email,password)}  className='w-40 px-2 py-2 bg-blue-300 rounded-lg' value='Submit' type='submit' />
      </div>
      </div>
    </div>
  )
}

export default Login