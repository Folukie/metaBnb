import React, { useState } from "react";
import Modal from "../components/modal.component";
import links from "../data/links.json";
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./sidebar.component";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex justify-between items-center py-10 px-48 sm:px-3 md:px-5">
      <div className="md:w-48">
        <img
          src="/images/metabnb-icon.png"
          alt="MetaBnb Icon"
          className="sm:w-3/5 "
        />
      </div>
      <ul className="flex justify-between gap-x-16 sm:hidden md:gap-x-5">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>

      <Modal
        buttonText={"Connect wallet"}
        heading={"Connect Wallet"}
        content={"Choose your preferred wallet:"}
      />
      <div className="text-white hidden sm:block">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          easing="ease-in"
          color="#821a1a"
          duration={0.4}
        />
      </div>
      <Sidebar close={() => setOpen(false)} isOpen={isOpen} />
    </header>
  );
};

export default Header;
