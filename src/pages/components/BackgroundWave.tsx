import React from "react";

type Props = {};

export default function BackgroundWave({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-[#666666] rounded-full h-[200px] w-[200px] animate-ping"></div>
      <div className="absolute border border-[#666666] rounded-full h-[200px] w-[200px] animate-ping"></div>
      <div className="absolute border border-[#666666] rounded-full h-[200px] w-[200px] animate-ping"></div>
      <div className="absolute border border-[#F7Ab0A] rounded-full opacity-20 h-[450px] w-[450px] animate-none"></div>
    
    </div>
  );
}
