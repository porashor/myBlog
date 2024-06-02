import React, { useEffect, useState } from 'react'
import Show from './Show'

const Fat = () => {
    const [data, setData] = useState('')
    useEffect(()=>{
        fetch('../Data/company.jsx')
        .then(res=>{
            if(!res.ok){
                console.log(res)
            }
            return res;
        })
        .then(data1=>{
            setData(data1)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        <Show data={data}/>
    </div>
  )
}

export default Fat
