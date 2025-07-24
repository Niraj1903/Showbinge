import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const nowMovieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await nowMovieData.json();
    console.log(json);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
