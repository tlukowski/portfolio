import Image from 'next/image';
import React from 'react';

type Direction = {
  direction: 'left' | 'right' | 'rocket';
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
    <>
      {direction === 'rocket' ? (
        <div
          className="infinity-right flex cursor-pointer flex-col items-center sm:hidden sm:max-w-max"
          onClick={handleClick}
        >
          <Image
            src="/rocket.svg"
            width={54}
            height={54}
            quality={100}
            alt="arrow"
          />
          <div className="mr-2 mt-2 bg-[#FF1494] p-2 text-center text-xs uppercase text-yellow-100 lg:text-base">
            Click to Fly
          </div>
        </div>
      ) : (
        <Image
          src="/arrow.svg"
          width={54}
          height={105}
          quality={100}
          alt="arrow"
          className={`${
            direction === 'left' ? 'left-2 rotate-180' : 'right-2'
          } absolute top-1/2 z-40 hidden -translate-y-1/2 cursor-pointer sm:block`}
          onClick={handleClick}
        />
      )}
    </>
  );
};
