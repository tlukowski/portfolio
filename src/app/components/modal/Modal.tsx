import React, { useState } from 'react';
import ModalContent from './ModalContent';
import ModalButton from './ModalButton';
import { motion } from 'framer-motion';
const Modal = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="z-30 mt-auto flex w-full justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="flex w-full flex-col items-center justify-center"
      >
        <div
          className={`relative ${
            isOpen
              ? 'h-full w-full'
              : 'h-44 w-64 before:absolute before:inset-0 before:h-full before:w-full before:bg-specialButton before:bg-auto before:bg-no-repeat'
          } flex items-center justify-center px-4 py-4`}
        >
          {isOpen ? (
            <ModalContent content={content} />
          ) : (
            <ModalButton openModal={toggleModal} />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
