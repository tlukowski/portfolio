import React, { useState } from 'react';
import ModalContent from './ModalContent';
import ModalButton from './ModalButton';
import { motion, AnimatePresence } from 'framer-motion';
const Modal = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="z-30 mt-auto flex w-full justify-center lg:mt-auto">
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
            <AnimatePresence>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                }}
              >
                <ModalContent content={content} closeModal={closeModal} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                }}
              >
                <ModalButton openModal={toggleModal} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
