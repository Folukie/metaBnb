import React from "react";

const Main = () => {
  return (
    <div className="py-20 px-48 grid grid-cols-2 justify-between sm:px-3 sm:grid-cols-1 sm:py-5 sm:gap-y-4 md:px-10 md:py-10 md:gap-x-3">
      <div className="pt-12 sm:pt-2 md:pt-2">
        <h1 className="text-5xl leading-tight sm:text-4xl md:text-4xl">
          Rent a <span className="text-primary">Place</span> away from{" "}
          <span className="text-primary">Home</span> in the{" "}
          <span className="text-primary">Metaverse</span>
        </h1>
        <p className="text-xl py-14 sm:py-6 md:py-7">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="flex h-14">
          <input placeholder="Search for location" className="border border-gray-100 rounded-l-md px-2 w-full"/>
          <button className="bg-primary w-80 py-2 text-white rounded-r-md">Search</button>
        </div>
      </div>
      <div className="justify-self-end">
        <img src="/images/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Main;
