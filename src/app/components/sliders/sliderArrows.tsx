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
  const [areArrowsDisabled, setAreArrowsDisabled] = useState(false);

  const disableArrows = () => {
    setAreArrowsDisabled(true);
    // Re-enable arrows after 2 seconds
    setTimeout(() => {
      setAreArrowsDisabled(false);
    }, 1000);
  };

  const handleNext = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % components.length,
    );
    // Rotate Earth 90 deg
    setCurrentRotate(currentRotate + 90);
    disableArrows();
  };

  const handlePrev = () => {
    // If current index is 0, set it to last index
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length,
    );
    // Rotate Earth -90 deg
    setCurrentRotate(currentRotate - 90);
    disableArrows();
  };
  // Update current component and rotate number and return it to parent component
  useEffect(() => {
    onCurrentComponentChange(currentComponentIndex, currentRotate);
  }, [currentComponentIndex, onCurrentComponentChange, currentRotate]);

  return (
    <>
      {!areArrowsDisabled && (
        <>
          <Arrow direction={'left'} onClick={handlePrev} />
          <Arrow direction={'right'} onClick={handleNext} />
          <div className="fixed bottom-2 left-2 z-50 sm:left-0 sm:top-0 sm:z-20  sm:w-full sm:justify-between lg:mt-0 lg:px-8">
            <Arrow direction={'rocket'} onClick={handleNext} />
          </div>
        </>
      )}
    </>
  );
};
