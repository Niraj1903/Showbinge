import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = (props) => {
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1087192/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OWEq2Pf8qpk?si=WtSu310mVeHJHvXM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </>
  );
};

export default VideoBackground;
