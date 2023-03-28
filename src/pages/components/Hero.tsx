import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundWave from "./BackgroundWave";
import profilePicture from "../assets/profile.jpg";
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
    <div className="h-screen w-screen flex flex-col space-y-8 items-center my-[20vh] text-center">
      <BackgroundWave />
      <Image
        src={profilePicture}
        alt="Profile Image"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="font-sans text-2xl">
        <span>{text}</span>
        <Cursor cursorColor="white" cursorStyle="█" />
      </h1>
    </div>
  );
}

export default Hero;
