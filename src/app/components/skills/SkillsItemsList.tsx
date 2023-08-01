import React from 'react';
import SkillsItem from './SkillsItem';
import { AnimatePresence, delay, motion } from 'framer-motion';
const skills = [
  {
    name: 'ReactJS',
  },
  {
    name: 'NextJS',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Git',
  },
  {
    name: 'Framer Motion',
  },
  {
    name: 'Formik',
  },
  {
    name: 'TailwindCSS',
  },
  {
    name: 'Anime.js',
  },
  {
    name: 'CSS',
  },
  {
    name: 'Wordpress',
  },
  {
    name: 'Prestashop',
  },
];
const learning = [
  {
    name: 'Redux',
  },
  {
    name: 'English B2 certificate',
  },
  {
    name: 'MUI',
  },
];
const SkillsItemList = () => {
  return (
    <>
      <AnimatePresence>
        <div className="mt-8 grid auto-rows-fr grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 1.25,
                type: 'ease',
                delay: (index + 2) * 0.2,
              }}
            >
              <SkillsItem name={skill.name} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <div className="mt-8 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.25,
            delay: skills.length * 0.2,
          }}
          className="text-special-shadow text-center font-[BebasNeue] text-4xl text-white"
        >
          Working in progress
        </motion.div>
        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {learning.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.25,
                delay: (skills.length + index + 1) * 0.2,
              }}
            >
              <SkillsItem name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsItemList;
