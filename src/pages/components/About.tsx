import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../assets/htm3.jpg";
import uparrow from "../assets/up_arrow.svg";
type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen w-screen pt-[7rem]">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center">
        About
      </h3>
      <div className="flex flex-row justify-center mt-10 flex-wrap ">
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        >
          <Image src={image1} alt="image" className="" width={210} />
        </motion.div>
        <motion.div className="w-max sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3 2xl:w-1/2 px-14  pt-5 my-auto"
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        >
          <h4 className="text-base 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-base text-justify">
            Full Stack web developer from India with experience in different
            technologies including React, NodeJS, Golang, Docker, Postgres,
            MongoDB etc. I have also worked on blockchain projects and have won
            numerous hackathons.
          </h4>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
