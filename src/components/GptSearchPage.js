import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { BACKGROUND_URL } from '../utils/constants';


function GptSearchPage() {
  return (
    <div>
      <img
          className='absolute inset-0 w-full h-full object-cover -z-10'
          src={BACKGROUND_URL}
          alt='BackgroundImage'
          />
      <GptSearchBar/>
      <GptSuggestion/>
    </div>
  )
}

export default GptSearchPage;