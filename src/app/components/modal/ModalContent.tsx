import React from 'react';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import ModalCloseButton from './ModalCloseButton';
interface ModalContentProps {
  content: string;
  closeModal: () => void;
}
const ModalContent: React.FC<ModalContentProps> = ({ content, closeModal }) => {
  const html = parse(content);
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="box-shadow-custom w-full border-[3px] border-primary bg-black bg-opacity-60 px-4 py-8 text-center text-white lg:px-14 lg:py-20 lg:text-2xl ">
        {html}
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <ModalCloseButton closeModal={closeModal}></ModalCloseButton>
      </motion.div>
    </motion.div>
  );
};

export default ModalContent;
