import React from 'react';
import parse from 'html-react-parser';
import { motion } from 'framer-motion';
interface ModalContentProps {
  content: string;
}
const ModalContent: React.FC<ModalContentProps> = ({ content }) => {
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
      <div className="box-shadow-custom w-full border-[3px] border-primary bg-black bg-opacity-60 px-14 py-20 text-center text-2xl text-white ">
        {html}
      </div>
    </motion.div>
  );
};

export default ModalContent;
