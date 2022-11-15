import React from "react";
import inspirations from "../data/inspirations.json";
import ImageStructure from "./image-structure.component";

const Inspiration = () => {
  return (
    <div className="my-20 px-48 sm:px-3 sm:my-10 md:px-10">
      <h3 className="text-4xl text-center font-bold">
        Inspiration for your next adventure
      </h3>
      <ul className="grid grid-cols-4 justify-items-center gap-8 my-10 sm:grid-cols-1 md:grid-cols-2">
        {inspirations.map((inspiration) => (
          <li className="border border-gray-50 p-3 rounded-xl">
           <ImageStructure src={inspiration.image}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inspiration;
