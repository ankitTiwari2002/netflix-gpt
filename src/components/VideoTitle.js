import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-20 md:pt-56 pl-6 md:pl-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg font-medium w-[40%] ">
        {overview}
      </p>
      <div className="flex w-full mt-2 md:mt-0 ">
        <button className="flex gap-1 items-center px-3 md:px-6 py-1 md:py-2 mr-2 rounded-md text-sm md:text-lg font-medium bg-white hover:bg-opacity-60 text-black">
          {" "}
          {<FaPlay />} Play
        </button>
        <button className="flex gap-1 items-center bg-gray-500 bg-opacity-50 text-white px-3 md:px-5 py-1 md:py-2 rounded-md text-sm md:text-lg font-medium">
          {" "}
          {<IoIosInformationCircleOutline className="text-2xl" />} More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
