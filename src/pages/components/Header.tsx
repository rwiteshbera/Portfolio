import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import twitterSVG from "../assets/twitter.svg";
import linkedinSVG from "../assets/linkedin.svg";
import githubSVG from "../assets/github.svg";
import instagramSVG from "../assets/instagram.svg";
import devSVG from "../assets/dev.svg";
import emailSVG from "../assets/email.svg";

import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="md:pr-3 flex justify-between max-w-7xl mx-auto z-10">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-start m-3 gap-8"
      >
        {/* Social Icon  */}
        <Link href="https://twitter.com/RwiteshBera" target="_blank">
          <Image src={twitterSVG} alt="twitter" height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/rwitesh-bera/" target="_blank">
          <Image src={linkedinSVG} alt="linkedin" height={24} />
        </Link>
        <Link href="https://github.com/rwiteshbera" target="_blank">
          <Image src={githubSVG} alt="github" height={24} />
        </Link>
        <Link href="https://www.instagram.com/rwiteshbera/" target="_blank">
          <Image src={instagramSVG} alt="instagram" height={24} />
        </Link>
        <Link href="https://dev.to/rwiteshbera" target="_blank">
          <Image src={devSVG} alt="dev" height={24} />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer gap-2"
      >
        <Link
          href="mailto:rwiteshbera@gmail.com"
          className="hidden md:inline-flex text-sm text-gray-400 gap-2"
        >
          <p>rwiteshbera@gmail.com</p>
        </Link>
        <Link
          href="mailto:rwiteshbera@gmail.com"
          className="mx-4 md:mx-0"
        >
          <Image src={emailSVG} alt="gmail" height={24} />
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?to=rwiteshbera@gmail.com&fs=1&tf=cm"
          target="_blank"
          className="uppercase hidden md:inline-flex text-sm text-gray-400 pr-2 mr-2"
        >
          <p>Hire Me</p>
        </Link>
      </motion.div>
    </header>
  );
}
