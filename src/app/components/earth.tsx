import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
Image;
export const Earth = ({ rotateNumber }: { rotateNumber: number }) => {
  return (
    <Image
      src="/eart.svg"
      fill
      priority
      quality={100}
      alt="background"
      style={{ rotate: `${rotateNumber}deg` }}
      className="!-bottom-[56%] !top-auto transition-all duration-1000"
    />
  );
};
