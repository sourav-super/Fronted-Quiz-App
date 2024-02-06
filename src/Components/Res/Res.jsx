import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
const Res = () => {
  const navigate = useNavigate();
  const [score, setscore] = useState(0)
  const location = useLocation();
  console.log(location)
  let data = localStorage.getItem("data").split(",")
  useEffect(()=>{   
    data.forEach((e,i)=>{
      console.log(location.state.obj[i+1].Ans)
      if(e == location.state.obj[i+1].Ans){
        setscore(score => score + 1) 
      }
    })    
  },[])
  useEffect(()=>{
    console.log(score)
  },[data])
const playagain=()=>{
  localStorage.removeItem("data")
  navigate("/")
} 


  return (
    <>
      <div className=' bg-slate-950 w-full h-screen text-white  flex-col items-center lg:flex lg:items-start lg:flex-row lg:justify-around flex-wrap lg:p-20'>
        <div className='lg:w-1/2  p-5 lg:mt-0'>
            <p className='lg:text-5xl text-4xl font-light'><span>Quiz Completed</span></p>
            <p className=' lg:text-5xl text-4xl font-semibold py-2 px-2'><span>You Scored...</span></p>
        </div>
        <div className='lg:w-1/2 flex-col flex items-center mt-5 lg:mt-0'>
            <ul className='flex flex-col justify-around md:w-1/2  w-3/4 h-60 rounded-lg items-center bg-slate-800'>
              <li className='text-2xl text-green-500 font-semibold font-serif'>{location.state.obj[0].name.toUpperCase()}</li>
              <li className='text-7xl font-semibold text-orange-500'>{score/2}</li>
              <li className='text-xl'><p>Out of <span className='p-0 text-green-500 font-serif text-2xl'>10</span></p></li>
            </ul>
            <button className=' py-4 lg:px-28 px-24 text-xl hover:bg-green-500 hover:text-black rounded bg-violet-900 mt-6' onClick={playagain}>Play Again</button>
        </div>
      </div>
   
    </>
  )
}

export default Res