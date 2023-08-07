import React from 'react';

const ModalCloseButton = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <button
      onClick={closeModal}
      className="absolute right-2 top-2 rounded-full bg-primary text-white"
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default ModalCloseButton;
