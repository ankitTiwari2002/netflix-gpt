import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-sm font-medium w-[40%] '>{overview}</p>
      <div className='w-1/4 '>
        <button className=' px-6 py-2 mr-2 rounded-md text-sm font-medium bg-white hover:bg-opacity-60 text-black'> ▶ Play</button>
        <button className='bg-gray-500 bg-opacity-50 text-white px-6 py-2 rounded-md text-sm font-medium'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;