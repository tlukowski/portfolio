import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SliderProjects } from './sliders/projects/SliderProjects';

const sliderItems = [
  {
    technology: '09.2017 - now',
    title: 'Gloo Software House',
    description:
      '<ul><li>Creating interactive user interfaces using HTML5, CSS, JavaScript.</li><li>Designing and implementing responsive layouts using Bootstrap and Tailwind.</li><li>Working with SASS and SCSS.</li><li>Creating animations using anime.js and pure JavaScript.</li><li>Working with Wordpress, Prestashop, and React.</li>  <li>Optimizing website performance.</li><li>Creating views based on graphic designs.</li><li>Creating reusable sections.</li></ul>',
    href: 'https://gloo.pl/',
  },
  {
    technology: '2022 - now',
    title: 'Freelance',
    description:
      '<ul><li>Technical support for client needs,</li><li>Coding views based on graphic designs,</li><li>Full support for Prestashop and Wordpress</li></ul>',
  },
];

export const Work = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.75, type: 'ease' }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/work-text.svg"
          width={618}
          height={132}
          quality={100}
          priority
          alt="background"
        />
      </motion.div>
      <SliderProjects sliderItems={sliderItems} />
    </>
  );
};
