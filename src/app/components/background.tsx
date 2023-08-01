import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
type currentPageProps = {
  currentPage: number;
};

export const Background = ({ currentPage }: currentPageProps) => {
  const minPage = 0;
  const actualCurrentPage = currentPage >= minPage ? currentPage : minPage;
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={currentPage}
        initial={
          // Use conditional to set initial position based on currentPage
          actualCurrentPage < currentPage
            ? { y: '100%', zIndex: 1 }
            : { y: '-100%', zIndex: 1 }
        }
        animate={{ y: '0', zIndex: 2 }}
        exit={{ y: '100%', zIndex: 1 }}
        transition={{ type: 'ease', duration: 1 }}
        style={{
          position: 'absolute',
          inset: '0',
          background: 'transparent',
        }}
      >
        {currentPage === 0 && (
          <Image
            src="/homepage.webp"
            priority
            layout="fill"
            className="!h-[105%]"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 1 && (
          <Image
            src="/space.webp"
            layout="fill"
            priority
            className="!h-[105%]"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 2 && (
          <Image
            src="/experience.webp"
            className="!h-[110%]"
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 3 && (
          <Image
            src="/skills.webp"
            className="!h-[110%]"
            priority
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
