'use client';
import Image from 'next/image';
import { PageLayout } from '../components/layout/PageLayout';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { Social } from '../components/Social';

export default function Contact() {
  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center justify-between">
      <div className="relative h-full w-full before:absolute before:left-0 before:right-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-50">
        <Image
          src="/space.webp"
          fill
          priority
          className="!h-[105%] object-cover"
          quality={100}
          alt="background"
        />
        <div className="relative z-20 mx-auto flex min-h-screen max-w-4xl flex-col px-6 pb-8 pt-8 md:pb-14 lg:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, type: 'ease' }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center">
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
