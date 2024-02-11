import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    //API call
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies from the query: " +
      searchText.current.value +
      ". only give me names of five movies, comma seperated like the result given ahead. Example: Gadar, Sholay, Don, Goalmaal, Krish";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[50%] md:pt-[12%] flex flex-wrap">
      <form
        className="w-full md:w-1/3 md:mx-auto flex gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-96 px-3 py-3 text-lg rounded-lg"
          ref={searchText}
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        />
        <button
          className="px-4 py-2 rounded-lg text-white bg-red-600"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
