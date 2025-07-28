import React from "react";
import { BODY_BG_URL } from "../utils/constants";

const GptSearchBar = () => {
  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <div className="-z-10 absolute">
          <img className="object-cover" src={BODY_BG_URL} alt="BG-Image" />
        </div>
        <form className="w-11/12 bg-black">
          <input
            className="p-4 m-4 col-span-9"
            type="text"
            placeholder="What would you like to watch today"
          />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
