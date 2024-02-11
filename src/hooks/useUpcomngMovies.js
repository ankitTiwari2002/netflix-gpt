import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

function useUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovies);

  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovie && upcomingMovies();
  }, []);
}

export default useUpcomingMovies;
