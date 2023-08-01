import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
export type SkillsItemProps = {
  name: string;
};

const SkillsItem = ({ name }: SkillsItemProps) => {
  return (
    <div className="up flex h-full w-full transform items-center justify-center border-2 border-primary bg-black bg-opacity-40  p-6 text-center text-base text-white transition duration-500 hover:scale-110 lg:px-9 lg:py-6 lg:text-2xl">
      {name}
    </div>
  );
};

export default SkillsItem;
