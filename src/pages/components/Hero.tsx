import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundWave from "./BackgroundWave";
import profilePicture from "../assets/profile.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Rwitesh Bera",
      "Guy who prefers tea over coffee",
      "But Loves to explore new tech",
    ],
    loop: true,
    delaySpeed: 1500, // Millisecond
  });
  return (
    <div className="h-screen w-screen flex flex-col space-y-6 items-center pt-40 text-center select-none">
      <BackgroundWave />
      <Link href={"/"}>
      <Image
        src={profilePicture}
        alt="Profile Image"
        width={200}
        height={200}
        className="rounded-full relative mx-auto object-cover "
        draggable="false"
      />
      </Link>
      <div>
        <h2 className="text-md uppercase text-gray-400 pb-3 tracking-[5px] ">
          Student | Developer
        </h2>
        <h2 className="text-sm uppercase text-gray-400 pb-3 tracking-[5px] ">
          Full Stack | Golang | Nodejs
        </h2>
        <h1 className="font-sans font-semibold 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl h-16">
          <span>{text}</span>
          <Cursor cursorColor="white " cursorStyle="█" />
        </h1>

        <div className="relative mt-3">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#blogs">
            <button className="heroButton">Blogs</button>
          </Link>
          <Link href="https://rwitesh.substack.com/" target="_blank">
            <button className="heroButton">Newsletter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
