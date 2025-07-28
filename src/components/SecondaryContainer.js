import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpComingMovies from "./hooks/useUpComingMovies";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useNowPlayingMovies();
  return (
    <>
      <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"UpComing"} movies={movies?.upComingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies?.populatMovies} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
