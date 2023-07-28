import React from "react";
export const PageLayout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="max-w-4xl mx-auto pt-32 relative z-20 flex justify-center min-h-screen flex-col pb-14">
      {children}
    </div>
  );
};
