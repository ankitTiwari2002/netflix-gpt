import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div className='pl-8' >
        <h1 className='py-7 text-xl font-medium text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex gap-2' >
        {movies?.map((movie)=>(
          <MovieCard key={movie.id} 
          posterPath={movie.poster_path}/>
          ))
        }
        
        </div>
        </div>      
    </div>
  )
}

export default MovieList