import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 p-2">
      <img className="rounded-lg" alt="movie card" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
