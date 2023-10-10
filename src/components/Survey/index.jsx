import React, { useState } from 'react'
import Smileys from '../Smileys'
import Stars from '../Stars'

const Survey = () => {

  const [stars, setStars] = useState(0)

  return (
    <div className='container mt-14'>
        <div className='mx-auto' style={{width:'21rem'}}>
        <p className='text-center font-sans text-black font-bold text-xl'>HOW WAS YOUR OVERALL EXPERIENCE WITH OUR SERVICES?</p>
        </div>
        <div className='flex justify-center mt-12'>
        <Smileys stars = {stars}/>
        </div>

        <div className='flex justify-center mt-12'>
        <Stars stars = {stars} handleStars = {setStars} />
        </div>

        <div className='flex justify-center mt-10'>
          <hr className='bg-red-700 h-2 w-28 rounded-xl'/>  <hr className='bg-red-100 h-2 w-28 ml-2 rounded-xl'/>
        </div>
        <div className='flex justify-center'>
          <button className='mt-10 p-3 text-white w-64 rounded-3xl text-xl' style={{background:'#1E0300'}}>Next</button>
        </div>

    </div>
  )
}

export default Survey