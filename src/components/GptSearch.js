import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BODY_BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="-z-10 absolute">
        <img className="object-cover" src={BODY_BG_URL} alt="BG-Image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GptSearch;
