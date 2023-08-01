import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Modal from '../../modal/Modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface SliderItems {
  technology: string;
  title: string;
  description: string;
  href?: string;
}

interface SliderItemsProps {
  sliderItems: SliderItems[];
}

const SliderProjects: React.FC<SliderItemsProps> = ({ sliderItems }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      className="!flex max-w-full flex-1 flex-col text-white"
      pagination={{ clickable: true }}
    >
      {sliderItems.map((item) => (
        <SwiperSlide
          key={item.title} // Adding a unique key to each slide is essential when rendering lists in React
          className="mt-16 !flex !h-auto flex-col items-center justify-center pb-16 font-[BebasNeue]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.25,
            }}
            className="flex h-full w-full flex-col items-center justify-center bg-center bg-no-repeat px-4 py-4"
          >
            <div className="mb-4 w-full text-center text-3xl font-light text-primary">
              {item.technology}
            </div>
            {item.href && item.title ? (
              <>
                <Link
                  target="_blank"
                  href={item.href}
                  className="text-special-shadow text-center text-5xl text-white"
                >
                  {item.title}
                </Link>
                <Link
                  target="_blank"
                  href={item.href}
                  className="mt-8 bg-purple-600 px-6 py-4 text-2xl transition-colors hover:bg-purple-500"
                >
                  Visit Website
                </Link>
              </>
            ) : (
              <div className="text-5xl text-white">{item.title}</div>
            )}
            <div className="mt-auto w-full">
              <Modal content={item.description} />
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { SliderProjects };
