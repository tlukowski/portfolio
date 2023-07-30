import React, { useState } from "react";
import ModalContent from "./ModalContent";
import ModalButton from "./ModalButton";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="mt-auto z-30 w-full flex justify-center">
      <div
        className={`relative ${
          isOpen
            ? "w-full h-full"
            : "w-64 h-44 before:bg-specialButton before:absolute before:inset-0 before:bg-auto before:w-full before:h-full before:bg-no-repeat"
        } flex justify-center items-center px-4 py-4 w-full`}
      >
        {isOpen ? <ModalContent /> : <ModalButton openModal={toggleModal} />}
      </div>
    </div>
  );
};

export default Modal;
