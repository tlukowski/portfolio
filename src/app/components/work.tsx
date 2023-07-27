import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Work = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.75, type: "ease" }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          src="/work-text.svg"
          width={618}
          height={132}
          quality={100}
          priority
          alt="background"
        />
      </motion.div>
    </div>
  );
};
