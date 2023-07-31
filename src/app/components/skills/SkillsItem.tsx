import React from "react";

import { AnimatePresence, motion } from "framer-motion";
export type SkillsItemProps = {
  name: string;
};

const SkillsItem = ({ name }: SkillsItemProps) => {
  return (
    <div className="border-2 border-primary up bg-black bg-opacity-40 text-white px-9 py-6 text-2xl flex justify-center items-center text-center transform transition duration-500 hover:scale-110 h-full w-full">
      {name}
    </div>
  );
};

export default SkillsItem;
