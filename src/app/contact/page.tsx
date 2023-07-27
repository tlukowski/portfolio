"use client";
import Image from "next/image";
import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Social } from "../components/Social";

export default function Contact() {
  return (
    <div>
      <Image
        src="/space.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="background"
        className="-z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.75, type: "ease" }}
        whileInView={{ opacity: 1 }}
      >
        {/* <Image
            src="/contact-text.svg"
            width={341}
            height={124}
            quality={100}
            priority
            alt="background"
          /> */}
        <PageLayout>
          <ContactForm />
        </PageLayout>
      </motion.div>

      <Social></Social>
    </div>
  );
}
