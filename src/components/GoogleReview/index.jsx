import React, { useState } from 'react'
import { Cool } from '../../assets/imageIndex'
import Suggeston from '../Suggestion'

const GoogleReview = () => {

    const [showSuggestion, setShowSuggestion] = useState(false)

    const handleGoogleReview = () => {
        window.open("https://www.google.com/maps/place/Dickey's+Barbecue+Pit/@43.6924776,-116.4856379,17z/data=!4m8!3m7!1s0x54afad186b65df0d:0xc9d92511304aacff!8m2!3d43.6924776!4d-116.4856379!9m1!1b1!16s%2Fg%2F11sd_y6w6c?entry=ttu", '_self')
    }

    const handleShowSuggestion = () => {
        setShowSuggestion(true)
    }

  return (
    <>
    {!showSuggestion && 
    <div className='container mx-auto mt-28'>
        <div className='flex justify-center'>
            <img src={Cool} className='w-auto' />
        </div>
        <div className='flex justify-center flex-col'>
        <p className='text-center font-sans text-black font-bold text-xl mt-7'>Thank you for sharing your valuable thoughts !!!</p>
        <p className='text-center font-sans text-gray-400 mt-3'>Do you have any suggestions? <span onClick={handleShowSuggestion} className='text-blue-700 font-medium'>Click here</span> </p>
        </div>
        <div className='flex justify-center'>
          <button className='mt-10 p-4 text-white w-72 rounded-3xl text-lg cursor-pointer' style={{background:'#1E0300'}} onClick={handleGoogleReview}>POST A GOOGLE REVIEW</button>
        </div>
    </div>
    }

    {showSuggestion && <Suggeston/>}

    </>
  )
}

export default GoogleReview