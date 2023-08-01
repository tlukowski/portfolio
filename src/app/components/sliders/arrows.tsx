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
    <div className="max-w-[2rem] cursor-pointer sm:max-w-max">
      <Image
        src="/arrow.svg"
        width={54}
        height={10}
        quality={105}
        alt="arrow"
        className={direction === 'left' ? 'rotate-180' : ''}
        onClick={handleClick}
      />
    </div>
  );
};
