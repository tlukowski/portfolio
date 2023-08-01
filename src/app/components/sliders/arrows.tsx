import Image from 'next/image';
import React from 'react';

type Direction = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export const Arrow = ({ direction, onClick }: Direction) => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    if (!isDisabled) {
      setIsDisabled(true);
      // Call the onClick function after 2 seconds
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
      // Call the onClick function passed from the parent component
      onClick();
    } else {
      e.preventDefault();
    }
  };

  return (
    <div
      className="infinity-right flex  cursor-pointer flex-col items-center sm:max-w-max"
      onClick={handleClick}
    >
      <Image
        src="/rocket.svg"
        width={54}
        height={54}
        quality={100}
        alt="arrow"
        className={direction === 'left' ? 'rotate-180' : ''}
      />
      <div className="mr-2 mt-2 bg-[#FF1494] p-2 text-center text-xs uppercase text-yellow-100 lg:text-base">
        Click to Fly
      </div>
    </div>
  );
};
