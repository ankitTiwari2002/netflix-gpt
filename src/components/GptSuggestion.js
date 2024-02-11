import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptSuggestion() {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black p-4 m-4 bg-opacity-80">
      {movieNames?.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
}

export default GptSuggestion;
