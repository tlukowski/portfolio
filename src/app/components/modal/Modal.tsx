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
    <div className="z-30 mt-8 flex w-full justify-center lg:mt-auto">
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
              : 'w-34 h-20 lg:h-44 lg:w-64 lg:before:absolute lg:before:inset-0 lg:before:h-full lg:before:w-full lg:before:bg-specialButton lg:before:bg-auto lg:before:bg-no-repeat'
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
