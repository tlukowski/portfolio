import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Modal from "./modal/Modal";
export const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, type: "ease" }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col justify-center items-center"
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
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.75, type: "ease" }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="mt-16">
          <Image src={"/logo.svg"} width={636} height={134} alt="about me" />
        </div>
      </motion.div>
      <Modal />
    </>
  );
};
