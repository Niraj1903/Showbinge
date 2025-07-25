import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Up Coming"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
