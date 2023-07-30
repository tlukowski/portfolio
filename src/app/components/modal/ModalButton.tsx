import React from "react";

const ModalButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <button
      className="text-4xl text-white uppercase font-[DeathStarOutlines] z-30"
      onClick={openModal}
    >
      Click to open
    </button>
  );
};

export default ModalButton;
