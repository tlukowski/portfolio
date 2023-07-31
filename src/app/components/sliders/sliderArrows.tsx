'use client';
import React, { useState, useEffect } from 'react';
import { Arrow } from './arrows';
import { Skills } from '../skills';
import { Work } from '../work';
import { HomePage } from '../homePage';
import { Projects } from '../projects';
import { SliderArrowsProps } from '@/app/types/SliderArrowsProps';

const components = [
  { component: <Skills />, key: 'skills' },
  { component: <Projects />, key: 'projects' },
  { component: <Work />, key: 'work' },
  { component: <HomePage />, key: 'homepage' },
];

export const SliderArrows = ({
  onCurrentComponentChange,
}: SliderArrowsProps) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [currentRotate, setCurrentRotate] = useState(0);

  const handleNext = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % components.length,
    );
    // Rotate Earth 90 deg
    setCurrentRotate(currentRotate + 90);
  };

  const handlePrev = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length,
    );
    // Rotate Earth -90 deg
    setCurrentRotate(currentRotate - 90);
  };
  // Update current component and rotate number and return it to parent component
  useEffect(() => {
    onCurrentComponentChange(currentComponentIndex, currentRotate);
  }, [currentComponentIndex, onCurrentComponentChange, currentRotate]);

  return (
    <>
      <div className="absolute z-20 flex h-full w-full items-center justify-between px-8">
        <Arrow direction={'left'} onClick={handlePrev} />
        <Arrow direction={'right'} onClick={handleNext} />
      </div>
    </>
  );
};
