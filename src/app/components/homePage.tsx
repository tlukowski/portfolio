import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.75, type: "ease" }}
      whileInView={{ opacity: 1 }}
    >
      <Image
        src="/mainPage-text.svg"
        width={896}
        height={133}
        quality={100}
        priority
        alt="background"
      />
    </motion.div>
  );
};
