import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestion = () => {
  const gptMoviesList = useSelector((store) => store.gptMoviesList);
  const { movieResults, movieNames } = gptMoviesList;
  if (!movieNames) return null;
  return (
    <>
      <div className="p-4 m-4 bg-black bg-opacity-70 text-white">
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </>
  );
};

export default GptMovieSuggestion;
