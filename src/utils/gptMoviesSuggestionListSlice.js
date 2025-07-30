import { createSlice } from "@reduxjs/toolkit";

const GptMovieSuggestionSlice = createSlice({
  name: "gptMoviesList",
  initialState: {
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export default GptMovieSuggestionSlice.reducer;
export const { addGptMovieResult } = GptMovieSuggestionSlice.actions;
