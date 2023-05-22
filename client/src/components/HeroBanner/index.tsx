import React from "react";
import leftSvg from "../../assets/Shape1.svg";
import rightSvg from "../../assets/Shape2.svg";
import mouse from "../../assets/mouse.svg";
import doubleArrow from "../../assets/doublearrow.svg";
import Socials from "../Socials";

const handleClickScroll = (id:string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const HeroBanner = () => {
  
  return (
    <section className="bg-black pt-32">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex justify-start order-2 md:order-1">
          <img src={leftSvg} alt="" />
        </div>
        <div className="xl:min-w-[500px] xl:max-w-[570px] content text-white flex flex-col gap-6 items-center px-6 order-1 md:order-2">
          <div className="text-sugarpunch text-2xl">Hi , I’m</div>
          <div className="text-sugarpunch  text-7xl md:text-8xl leading-tight md:leading-tight text-center">
            Łukowski
            <br /> Tomasz
          </div>
          <div className="text-3xl leading-snug text-center">
            <p>Ongoing frontend developer</p>
          </div>
          <div className="text-center">
            <a href="/" className="btn btn-primary">
              Contact
            </a>
          </div>
          {/* <Socials /> */}
          <div
            className="mt-auto mb-12 flex justify-center flex-col items-center gap-y-3 cursor-pointer motion-safe:animate-bounce"
            onClick={() => handleClickScroll('#Projects')}
          >
            <img src={mouse} alt={mouse} />
            <img className="w-6 " src={doubleArrow} alt="" />
          </div>
        </div>
        <div className="flex justify-end order-3">
          <img src={rightSvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
