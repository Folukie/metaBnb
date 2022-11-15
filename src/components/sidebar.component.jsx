import React from "react";
import { motion } from "framer-motion";
import links from "../data/links.json";

const Sidebar = ({ close, isOpen }) => {
  return (
    <aside
      className={`bg-white sidebar max-w-full w-full z-50 fixed top-0 left-0 hidden sm:block transition-all duration-300 transform h-screen ${
        !isOpen ? "-translate-y-full" : ""
      }`}
    >
      <div className="h-20 items-center flex sm:mx-0 sm:px-7 justify-center pt-20">
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
          }}
        >
          <a href="/">
            <div className="">
              <img
                src="/images/metabnb-icon.png"
                alt="MetaBnb Icon"
                className="w-40"
              />
            </div>
          </a>
        </motion.div>
        <button onClick={close}>
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.76893 10.4285L18.2044 19.791M1.3334 19.791L9.76893 10.4285L1.3334 19.791ZM18.2044 1.06604L9.76732 10.4285L18.2044 1.06604ZM9.76732 10.4285L1.3334 1.06604L9.76732 10.4285Z"
              stroke="#A02279"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-y-8 py-14">
        <nav className="text-primary gap-y-12 text-2xl grid px-6">
          {links.map((link) => (
            <a
              className="no-underline capitalize text-lg "
              key={link.id}
              href={link.link}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
