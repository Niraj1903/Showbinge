import React from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = (props) => {
  return (
    <>
      <div className="pt-36 px-12">
        <h1 className="font-bold text-6xl">{props.title}</h1>
        <p className="py-6 text-lg w-1/2">{props.des}</p>
        <div className="flex">
          <button className="flex bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg">
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
