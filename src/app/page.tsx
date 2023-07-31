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
      <main className="flex h-screen min-h-[1200px] max-h-screen flex-col items-center justify-between overflow-hidden">
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 2, type: 'ease' }}
            whileInView={{ opacity: 1 }}
            className="absolute top-8 right-12 text-3xl text-white uppercase font-bold z-30"
          >
            <Link href="/contact">Contact me</Link>
          </motion.div>
          <div className="h-screen min-h-[1200px] relative w-full">
            <SliderArrows
              onCurrentComponentChange={handleCurrentComponentChange}
            />
            <BackgroundLayout>
              <Background currentPage={currentIndex} />
            </BackgroundLayout>
            <PageLayout>
              <PageRouter currentPage={currentIndex} />
            </PageLayout>
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-6xl">
                <Earth rotateNumber={currentRotate} />
              </div>
            </div>
          </div>
        </div>
        <DesignAuthor />
      </main>
    </>
  );
}
