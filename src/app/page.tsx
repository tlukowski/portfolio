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
  const [currentDirection, setCurrentDirection] = useState('');
  const handleCurrentComponentChange = (index: number, rotate: number, direction: string) => {
    setCurrentIndex(index);
    setCurrentRotate(rotate);
    setCurrentDirection(direction);
  };

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden lg:h-screen lg:max-h-screen lg:min-h-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 2, type: 'ease' }}
          animate={{ opacity: 1 }}
          className="relative top-8 z-30 text-3xl font-bold uppercase text-white lg:absolute lg:right-12"
        >
          <Link href="/contact">Contact me</Link>
        </motion.div>
        <SliderArrows onCurrentComponentChange={handleCurrentComponentChange} />
        <BackgroundLayout>
          <Background currentPage={currentIndex} currentDirection={currentDirection} />
        </BackgroundLayout>
        <PageLayout>
          <PageRouter currentPage={currentIndex} />
        </PageLayout>
        <div className="hidden flex-col items-center justify-center lg:flex">
          <Earth rotateNumber={currentRotate} />
        </div>
        <DesignAuthor />
      </main>
    </>
  );
}
