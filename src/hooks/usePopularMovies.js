import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

function usePopularMovies() {
    const dispatch= useDispatch();

    const popularMovies = async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS)
      const json = await data.json()
      dispatch(addPopularMovies(json.results));
    }
    
    useEffect(()=>{
      popularMovies();
    },[])
}

export default usePopularMovies;