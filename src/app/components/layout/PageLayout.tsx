import React from "react";
export const PageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="max-w-4xl mx-auto mt-32 relative z-20 flex justify-center">
      <div className="w-full">{children}</div>
    </div>
  );
};
