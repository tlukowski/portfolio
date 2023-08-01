'use client';
import { Background } from './components/background';
import { SliderArrows } from './components/sliders/sliderArrows';
import { useState } from 'react';
import { Earth } from './components/earth';
import { PageLayout } from './components/layout/PageLayout';
import { PageRouter } from './components/PageRouter';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DesignAuthor from './components/DesignAuthor';
import BackgroundLayout from './components/layout/BackgroundLayout';
export default function Home() {
  // Get current Index of page, there are 4 components to switch page
  const [currentIndex, setCurrentIndex] = useState(0);
  // return rotate from SliderArrow component to rotate Earth
  const [currentRotate, setCurrentRotate] = useState(0);
  const handleCurrentComponentChange = (index: number, rotate: number) => {
    setCurrentIndex(index);
    setCurrentRotate(rotate);
  };

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden lg:h-screen lg:max-h-screen lg:min-h-[1200px]">
        {/* <div className="relative w-full lg:h-screen lg:min-h-[1200px]"> */}
        <SliderArrows onCurrentComponentChange={handleCurrentComponentChange} />
        <BackgroundLayout>
          <Background currentPage={currentIndex} />
        </BackgroundLayout>
        <PageLayout>
          <PageRouter currentPage={currentIndex} />
        </PageLayout>
        <div className="hidden flex-col items-center justify-center lg:flex">
          <Earth rotateNumber={currentRotate} />
        </div>
        {/* </div> */}
      </main>
    </>
  );
}

{
  /* <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 2, type: 'ease' }}
            animate={{ opacity: 1 }}
            className="absolute right-12 top-8 z-30 text-3xl font-bold uppercase text-white"
          >
            <Link href="/contact">Contact me</Link>
          </motion.div>
        </div> */
}
{
  /* <DesignAuthor /> */
}
