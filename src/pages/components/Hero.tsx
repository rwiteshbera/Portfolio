import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundWave from "./BackgroundWave";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Rwitesh Bera",
      "Full Stack Developer",
      "Guy who prefers tea over coffee",
      "But Loves to explore new tech",
    ],
    loop: true,
    delaySpeed: 1500, // Millisecond
  });
  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundWave />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="white" cursorStyle="█" />
      </h1>
    </div>
  );
}

export default Hero;
