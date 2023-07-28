import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThanksYouPage } from "./ThanksYouPage";
import { FormikContact } from "./FormikContact";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.div
          key="contactForm"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, type: "ease" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75 } }}
        >
          <FormikContact setIsSubmitted={setIsSubmitted}></FormikContact>
        </motion.div>
      ) : (
        <motion.div
          key="thanksYouPage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          <ThanksYouPage loop={false}></ThanksYouPage>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
