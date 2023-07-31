import React from 'react';

const ModalButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <button
      className="z-30 font-[DeathStarOutlines] text-4xl uppercase text-white"
      onClick={openModal}
    >
      Click to open
    </button>
  );
};

export default ModalButton;
