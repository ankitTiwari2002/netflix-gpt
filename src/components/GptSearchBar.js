import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

function GptSearchBar() {
  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[12%] flex' >
        <form className='mx-auto flex gap-4'>
            <input className='w-96 px-3 py-2 rounded-lg bg-opacity-0' type='text' placeholder={lang[langKey]?.gptSearchPlaceHolder}/>
            <button className='px-4 py-2 rounded-lg text-white bg-red-600'>{lang[langKey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar