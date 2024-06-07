import React, { useState } from 'react'
import Form from './Form'
import useAuthintication from '../Hooks/useAuthintication'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function emailChange(e){
    setEmail(e.target.value)
  }
  function passwordChange(e){
    setPassword(e.target.value)
  }
  const {user, SignIn } = useAuthintication({email, password})
  return (
    <div>
        <div>Sign In</div>
        <div>
            <Form title={'Sign In'} email={email} password={password} emailChange={emailChange} passwordChange={passwordChange} Log={SignIn} user={user?.email}/>
        </div>
    </div>
  )
}

export default Signin
