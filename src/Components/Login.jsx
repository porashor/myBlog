import React, { useState } from 'react'
import Form from './Form'
import useAuthintication from '../Hooks/useAuthintication'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function emailChange(e){
    setEmail(e.target.value)
  }
  function passwordChange(e){
    setPassword(e.target.value)
  }
  const {user, LogIn } = useAuthintication({email, password})
  return (
    <div>
        <div>log In</div>
        <div>
            <Form title={'Log In'} email={email} password={password} emailChange={emailChange} passwordChange={passwordChange} Log={LogIn} user={user?.email}/>
        </div>
    </div>
  )
}

export default Login
