import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
type currentPageProps = {
  currentPage: number;
  currentDirection: string;
};
export const Background = ({ currentPage, currentDirection }: currentPageProps) => {  
     
    return (
      <AnimatePresence initial={false}>
        <motion.div
          key={currentPage}
          initial={{
            y: '100%',
            zIndex: 1,
          }}
          animate={{ y: '0', zIndex: 2 }}
          exit={{
            y: '-100%',
          }}
          transition={{ type: 'ease', duration: 1 }}
          style={{
            position: 'absolute',
            inset: '0',
          }}
        >
          {currentPage === 0 && (
            <Image
              src="/homepage.webp"
              priority
              fill
              className="!h-[105%] object-cover"
              quality={100}
              alt="background"
            />
          )}
          {currentPage === 1 && (
            <Image
              src="/space.webp"
              fill
              priority
              className="!h-[105%] object-cover"
              quality={100}
              alt="background"
            />
          )}
          {currentPage === 2 && (
            <Image
              src="/experience.webp"
              className="!h-[110%] object-cover"
              priority
              fill
              quality={100}
              alt="background"
            />
          )}
          {currentPage === 3 && (
            <Image
              src="/skills.webp"
              className="!h-[110%] object-cover"
              fill
              quality={100}
              alt="background"
            />
          )}
        </motion.div>
      </AnimatePresence>
    );
};
