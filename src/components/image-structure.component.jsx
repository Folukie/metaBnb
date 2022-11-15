import React from "react";

const ImageStructure = ({ src }) => {
  return (
    <div>
      {" "}
      <div className="">
        <img src={src} alt="inspirations" className="w-72 " />
      </div>
      <div className="flex justify-between my-3">
        <p>Desert king</p>
        <p className="font-bold">1MBT per night</p>
      </div>
      <div className="flex justify-between my-3">
        <p className="text-xs">2345km away</p>
        <p className="text-xs">available for 2weeks stay</p>
      </div>
      <img src="/images/stars.svg" alt="stars" />
    </div>
  );
};

export default ImageStructure;
