import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GptSearch;
