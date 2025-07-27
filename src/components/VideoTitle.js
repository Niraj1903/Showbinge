import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = (props) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{props.title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-6/12">
          {props.des}
        </p>
        <div className="my-4 md:m-0">
          <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            <IoMdPlay />
            Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            <IoMdInformationCircleOutline />
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
