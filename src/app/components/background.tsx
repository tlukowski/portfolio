import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
type currentPageProps = {
  currentPage: number;
};

export const Background = ({ currentPage }: currentPageProps) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={currentPage}
        initial={{ x: "100%", zIndex: 1 }}
        animate={{ x: "0", zIndex: 2 }}
        exit={{ x: "-100%", zIndex: 1 }}
        transition={{ type: "tween", duration: 1 }}
        style={{
          position: "absolute",
          inset: "0",
          background: "transparent",
        }}
      >
        {currentPage === 0 && (
          <Image
            src="/homepage.webp"
            layout="fill"
            className="!h-[105%]"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 1 && (
          <Image
            src="/space.webp"
            layout="fill"
            className="!h-[105%]"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 2 && (
          <Image
            src="/experience.webp"
            className="!h-[110%]"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
        {currentPage === 3 && (
          <Image
            src="/skills.webp"
            className="!h-[110%]"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
