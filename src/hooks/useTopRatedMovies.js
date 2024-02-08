import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

function useTopRatedMovies() {
    const dispatch= useDispatch();

    const topRatedMovies = async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTIONS)
      const json = await data.json()
      dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(()=>{
      topRatedMovies();
    },[])
}

export default useTopRatedMovies;