import React from 'react';
export const PageLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="flex-grow-1 relative z-20 mx-auto mt-auto flex  min-h-full max-w-full flex-col items-center px-6 pb-12 pt-20 sm:mt-0 md:pb-14 lg:max-w-4xl lg:flex-grow-0 lg:pt-32  ">
      {children}
    </div>
  );
};
