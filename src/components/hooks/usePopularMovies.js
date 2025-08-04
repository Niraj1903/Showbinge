import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../../utils/moviesSlice";
const usePopularMovies = () => {
  const populatMovies = useSelector((store) => store.movies.populatMovies);
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    !populatMovies && popularMovies();
  }, []);
};

export default usePopularMovies;
