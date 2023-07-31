import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { SliderProjects } from './sliders/projects/SliderProjects';

const sliderItems = [
  {
    technology: 'React',
    title: 'Form for Website Estimation',
    description:
      '<p>The Project Brief for Website Estimation is a web application that allows clients to provide detailed information about their website requirements.</p><div className="mt-4 flex-col items-center"><div className="text-3xl"><strong>Used technology:</strong></div><ul className="mt-4"><li>Typescript</li><li>Next.js</li><li>Tailwind</li></ul></div> ',
    href: 'https://offer-next.netlify.app/',
  },
  {
    technology: 'Wordpress',
    title: 'How2Edu',
    description:
      '<p>Landing page created for how2Edu react app.</p><div className="mt-4 flex-col items-center"><div className="text-3xl"><strong>Used technology:</strong></div><ul className="mt-4"><li>Waypoint.js</li><li>LottieFiles</li><li>Wordpress</li></ul></div> ',
    href: 'http://aplikacja.dev9.pro/',
  },
  {
    technology: 'Wordpress',
    title: 'Elcaro.pl',
    description:
      '<p>Page builded for Elcaro client. I created a business card for this company </p><div className="mt-4 flex-col items-center"><div className="text-3xl"><strong>Used technology:</strong></div><ul className="mt-4"><li>Swiper</li><li>Scss</li><li>Wordpress</li></ul></div>',
    href: 'https://elcaro.pl/',
  },
  {
    technology: 'Prestashop',
    title: 'TopDrogeria.pl',
    description:
      '<p>Prestashop Ecommerce builded for TopDrogeria Client, we designed and created new page for client. </p><div className="mt-4 flex-col items-center"><div className="text-3xl"><strong>Used technology:</strong></div><ul className="mt-4"><li>Boostrap</li><li>Scss</li><li>Prestashop</li><li>jQuery</li></ul></div>',
    href: 'https://www.topdrogeria.pl/',
  },
  {
    technology: 'Prestashop',
    title: 'zlotyAniol.pl',
    description:
      '<p>Prestashop Ecommerce builded for ZłotyAnioł Client, we designed and created new page for client. </p><div className="mt-4 flex-col items-center"><div className="text-3xl"><strong>Used technology:</strong></div><ul className="mt-4"><li>Boostrap</li><li>Scss</li><li>Prestashop</li><li>jQuery</li></ul></div>',
    href: 'https://zlotyaniol.pl/',
  },
];

export const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.75, type: 'ease' }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/projects-text.svg"
          width={360}
          height={140}
          quality={100}
          priority
          alt="background"
        />
      </motion.div>
      <SliderProjects sliderItems={sliderItems} />
    </>
  );
};
