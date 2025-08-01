import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    upComingMovies();
  }, []);
};

export default useUpComingMovies;
