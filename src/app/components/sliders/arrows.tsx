import Image from 'next/image';
import React from 'react';

type Direction = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export const Arrow = ({ direction, onClick }: Direction) => {
  return (
    <div className="cursor-pointer">
      <Image
        src="/arrow.svg"
        width={54}
        height={10}
        quality={105}
        alt="arrow"
        className={direction === 'left' ? 'rotate-180' : ''}
        onClick={onClick}
      />
    </div>
  );
};
