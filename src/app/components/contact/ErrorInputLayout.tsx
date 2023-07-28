import React from "react";

export const ErrorInputLayout = ({ children }: { children: string }) => {
  return (
    <div className="text-red-600 font-bold w-full text-left text-xl mt-2">
      {children}
    </div>
  );
};
