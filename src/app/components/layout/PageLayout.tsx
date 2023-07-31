import React from 'react';
export const PageLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="relative z-20 mx-auto flex min-h-full max-w-4xl flex-col items-center px-6 pb-12 pt-20 md:pb-14 lg:pt-32  ">
      {children}
    </div>
  );
};
