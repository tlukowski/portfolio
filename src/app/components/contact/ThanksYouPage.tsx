import Lottie from "react-lottie-player";
import envelope from "../../assets/env.json";
import { useRef } from "react";

export const ThanksYouPage = ({ loop = false }) => (
  <div className="flex flex-col items-center gap-12 mt-24">
    <Lottie
      animationData={envelope}
      loop={loop}
      play
      style={{ width: 250, height: 250 }}
    />
    <div className="text-3xl text-white font-bold animate-bounce">
      Thank you for your message
    </div>
  </div>
);
