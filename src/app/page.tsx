"use client";
import Image from "next/image";
import { Background } from "./components/background";
import { SliderArrows } from "./components/slider/sliderArrows";
import { useState } from "react";
import { Earth } from "./components/earth";
import { PageLayout } from "./components/layout/PageLayout";
import { PageRouter } from "./components/PageRouter";
import Link from "next/link";

export default function Home() {
  // Get current Index of page, there are 4 components to switch page
  const [currentIndex, setCurrentIndex] = useState(0);
  // return rotate from SliderArrow component to rotate Earth
  const [currentRotate, setCurrentRotate] = useState(0);
  const handleCurrentComponentChange = (index: number, rotate: number) => {
    setCurrentIndex(index);
    setCurrentRotate(rotate);
  };

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex overflow-hidden">
        <div className="absolute top-8 right-12 text-3xl text-white uppercase font-bold z-30">
          <Link href="/contact">Contact me</Link>
        </div>
        <div className="h-screen relative w-full">
          <SliderArrows
            onCurrentComponentChange={handleCurrentComponentChange}
          />
          <div className="absolute -z-10 h-full w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-90">
            <Background currentPage={currentIndex} />
          </div>
          <PageLayout>
            <PageRouter currentPage={currentIndex} />
          </PageLayout>
          <div className="max-w-6xl">
            <Earth rotateNumber={currentRotate} />
          </div>
        </div>
      </div>
    </main>
  );
}
