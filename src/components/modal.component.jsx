import React, { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    overflowY: "auto",
    maxHeight: "100vh",
    zIndex: 30,
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    borderRadius: "20px",
    padding: "0",
    transition: "all 5000ms ease-in-out",
  },
};

const Modal = ({ buttonText, heading, content }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className="bg-primary px-6 py-3 rounded-md text-white"
        onClick={openModal}
      >
        {buttonText}
      </button>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="w-96 sm:w-80">
      <div className="flex justify-between px-5 py-3 border-gray-100 pb-2 ">
          <h2 className="font-bold text-2xl">{heading}</h2>
          <button onClick={closeModal}>
            <img src="/images/close.svg" alt="close" />
          </button>
        </div>
        <hr />
        <div className="px-5 pt-4 pb-8 space-y-5">
          <h4>{content}</h4>
          <button className="flex border border-gray-50 w-full rounded-md items-center px-4 py-2 space-x-3 relative hover:bg-gray-60">
            <img src="/images/metamask-nft-icon.svg" alt="metamask icon" />
            <p className="font-bold">Metamask</p>
            <img
              src="/images/icon.svg"
              alt="icon"
              className="absolute right-6"
            />
          </button>
          <button className="flex border border-gray-50 w-full rounded-md items-center px-4 py-2 space-x-3 relative hover:bg-gray-60">
            <img src="/images/walletconnect-nft-icon.svg" alt="metamask icon" />
            <p className="font-bold">WalletConnect</p>
            <img
              src="/images/icon.svg"
              alt="icon"
              className="absolute right-6"
            />
          </button>
        </div>
      </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
