import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black grid grid-cols-4 px-48 py-14 justify-items-center sm:px-3 sm:py-6 sm:flex sm:flex-col-reverse sm:gap-y-4 sm:justify-items-start md:px-10">
      <div className="space-y-12 sm:space-y-4">
        <img src="/images/footer-meta.svg" alt="MetaBnb" className="sm:w-32" />
        <div className="flex space-x-10">
          <img src="/images/facebook.svg" alt="facebook" />
          <img src="/images/instagram.svg" alt="instagram" />
          <img src="/images/twitter.svg" alt="twitter" />
        </div>
        <h6 className="text-white">&copy; 2022 Metabnb</h6>
      </div>

      <div className="space-y-5">
        <h4 className="text-white font-bold text-xl">Community</h4>
        <ul className="space-y-2">
          {["NFT", "Tokens", "Landlords", "Discords"].map((item, idx) => (
            <li key={idx} className="text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-5">
        <h4 className="text-white font-bold text-xl">Places</h4>

        <ul className="space-y-2">
          {["Castle", "Farms", "Beach", "Learn more"].map((item, idx) => (
            <li key={idx} className="text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <h4 className="text-white font-bold text-xl">About us</h4>
        <ul className="space-y-2">
          {["Roadmaps", "Creators", "Career", "Contact us"].map((item, idx) => (
            <li key={idx} className="text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
