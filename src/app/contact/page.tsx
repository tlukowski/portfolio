"use client";
import Image from "next/image";
import { PageLayout } from "../components/layout/PageLayout";
import { motion } from "framer-motion";
import { ContactForm } from "../components/contact/ContactForm";
import { Social } from "../components/Social";

export default function Contact() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <div className="relative h-full w-full before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-50">
        <Image
          src="/space.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background"
          className="-z-10"
        />
        <div className="max-w-4xl mx-auto pt-32 relative z-20 flex min-h-screen flex-col pb-8 md:pb-14 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, type: "ease" }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex justify-center items-center">
              <Image
                src="/contact-text.svg"
                width={341}
                height={124}
                quality={100}
                priority
                alt="background"
              />
            </div>
          </motion.div>
          <ContactForm />
          <Social></Social>
        </div>
      </div>
    </main>
  );
}
