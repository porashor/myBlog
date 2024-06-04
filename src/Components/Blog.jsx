import React, {useState} from 'react'
import { company } from '../Data/fandamental'
import BlogCard from './BlogCard'
const Blog = () => {
  const [num, setnum] = useState(0)
  const [num1, setnum1] = useState(15)

function change(){
  setnum((cd)=>(
    cd +=15
  ))
  setnum1((cd)=>(
    cd +=15
  ))
}
function changeL(){
  setnum((cd)=>(
    cd -=15
  ))
  setnum1((cd)=>(
    cd -=15
  ))
  
}
function change1(a, b){
  setnum(a)
  setnum1(b)
  
}
let companyMain = company.slice(num, num1);
  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            companyMain.map((item, index)=>{
              console.log(index)
              return (
                <BlogCard key={index} {...item}/>
            )
            })
        }
    </div>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={changeL}>prev</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change1(15,30)}>1</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change1(30,45)}>2</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change1(45,60)}>3</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change1(60,75)}>4</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change1(75,90)}>5</button>
    <button className='px-3 py-1 my-5 bg-[#ab8032] text-3xl mx-2 rounded-md hover:bg-yellow-500' onClick={()=>change()}>next</button>
    </div>
  )
}

export default Blog
