import React from "react";

const Meta = () => {
  return (
    <div
      className="bg-primary grid grid-cols-2 px-48 py-14 items-center sm:px-3 sm:py-6 sm:grid-cols-1 md:px-10"
      id="nfts"
    >
      <div className="space-y-10 sm:space-y-5">
        <h3 className="text-white font-bold text-5xl sm:text-4xl">Metabnb NFTs</h3>
        <p className="text-white leading-loose w-4/5 text-lg">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="bg-white text-primary rounded-lg h-14 px-8">
          Learn more
        </button>
      </div>
      <div>
        <img src="/images/meta-icon.png" alt="" />
      </div>
    </div>
  );
};

export default Meta;
