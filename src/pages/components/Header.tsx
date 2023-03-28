import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 md:pr-3 flex justify-between max-w-7xl mx-auto z-10">
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
          duration: 1.5
        }}

        className="flex flex-row justify-start m-2 gap-2"
      >
        {/* Social Icon  */}
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          url="https://twitter.com/RwiteshBera"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          url="https://www.linkedin.com/in/rwitesh-bera/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          url="https://github.com/rwiteshbera"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          url="https://www.instagram.com/rwiteshbera/"
        />
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
        duration: 1.5
      }}

      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <Link href="mailto:rwiteshbera@gmail.com" legacyBehavior>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>
        <Link href="mailto:rwiteshbera@gmail.com">
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 pl-2">
          Get in touch
        </p>
        </Link>
      </motion.div>
    </header>
  );
}
