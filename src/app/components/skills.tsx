import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import SkillsItemList from './skills/SkillsItemsList';

export const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, type: 'ease' }}
      >
        <Image
          src="/skills-text.svg"
          width={310}
          height={132}
          quality={100}
          priority
          alt="background"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, type: 'ease' }}
      >
        <div className="text-special-shadow mt-16 text-center font-[BebasNeue] text-5xl text-white">
          Here is a list of some of my skills
        </div>
      </motion.div>

      <SkillsItemList />
    </>
  );
};
