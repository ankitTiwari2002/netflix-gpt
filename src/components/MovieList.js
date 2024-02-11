import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-0 md:pl-10">
      <h1 className="py-7 text-2xl font-medium text-white">{title}</h1>
      <div
        className="flex overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
