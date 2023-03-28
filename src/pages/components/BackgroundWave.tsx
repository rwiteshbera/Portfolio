import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundWave({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      scale: [1,1.5,1.5,2,1.5,1.5,1,1],
      opacity: [0, 1, 1, 1, 1, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
    }}
    className="relative flex justify-center items-center">
      <div className="absolute border border-[#666666] rounded-full h-[150px] w-[150px] animate-ping mt-52"></div>
      <div className="absolute border border-[#F7Ab0A] rounded-full opacity-20 h-[350px] w-[350px] animate-none mt-52"></div>
    </motion.div>
  );
}
