import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
motion;
export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.75, type: "ease" }}
      whileInView={{ opacity: 1 }}
    >
      <Image
        src="/skills-text.svg"
        width={310}
        height={132}
        quality={100}
        priority
        alt="background"
      />
    </motion.div>
  );
};
