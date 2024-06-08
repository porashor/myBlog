import React from 'react'

const Form = ({email, password, emailChange, passwordChange, title, Log, user}) => {
  return (
    <div className='bg-[#0a022b] w-[80%] mx-auto my-[100px] py-10 rounded-md'>
      <h1 className='text-center text-3xl uppercase font-semibold py-4 my-2'>{title}</h1>
      <div className='grid w-[80%] mx-auto max-w-[800px] gap-10 items-center'>
        <input type="email" placeholder='enter your email' className='px-3 py-2 outline-none rounded-md text-black ' required value={email} onChange={emailChange}/>
        <input type="password" placeholder='enter password' className='px-3 py-2 outline-none rounded-md text-black ' required value={password} onChange={passwordChange}/>
        <button className='px-3 py-2 rounded-md bg-green-400 hover:bg-green-700 text-xl uppercase font-semibold' onClick={Log}>{title}</button>
      </div>
      <h4 className=''>{user}</h4>
    </div>
  )
}

export default Form
