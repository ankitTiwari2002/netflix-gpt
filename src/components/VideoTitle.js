import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-sm font-medium w-[40%] '>{overview}</p>
      <div className='flex w-full '>
        <button className='flex gap-1 items-center px-6 py-2 mr-2 rounded-md text-sm font-medium bg-white hover:bg-opacity-60 text-black'> {<FaPlay/>} Play</button>
        <button className='flex gap-1 items-center bg-gray-500 bg-opacity-50 text-white px-5 py-2 rounded-md text-sm font-medium'> {<IoIosInformationCircleOutline className='text-2xl'/>} More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;