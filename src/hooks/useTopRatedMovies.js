import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movies.topRatedMovies);

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovie && topRatedMovies();
  }, []);
}

export default useTopRatedMovies;
