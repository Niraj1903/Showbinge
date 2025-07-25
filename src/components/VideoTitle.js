import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = (props) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl text-white">{props.title}</h1>
        <p className="py-6 text-lg w-1/2 text-white">{props.des}</p>
        <div className="flex">
          <button className="flex bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
            <IoMdPlay />
            Play
          </button>
          <button className="flex bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2">
            <IoMdInformationCircleOutline />
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
