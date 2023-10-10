import React from 'react'
import Smileys from '../Smileys'

const Survey = () => {
  return (
    <div className='container mt-14'>
        <div className='mx-auto' style={{width:'21rem'}}>
        <p className='text-center font-sans text-black font-bold text-xl'>HOW WAS YOUR OVERALL EXPERIENCE WITH OUR SERVICES?</p>
        </div>
        <div className='flex justify-center mt-12'>
        <Smileys stars = {0}/>
        </div>
    </div>
  )
}

export default Survey