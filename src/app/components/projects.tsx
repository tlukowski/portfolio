import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.75, type: "ease" }}
      whileInView={{ opacity: 1 }}
    >
      <Image
        src="/projects-text.svg"
        width={360}
        height={140}
        quality={100}
        priority
        alt="background"
      />
    </motion.div>
  );
};
