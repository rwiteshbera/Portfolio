import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/htm3.jpg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly items-center w-2/3 mx-auto -mt-[20rem]">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold -mb-[64px]">
        About
      </h3>
      <motion.div
        className="mx-10 w-[60vw]"
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
        <Image
          src={image1}
          alt="hack_the_moutain3.0_in_Delhi_NCR"
        />
      </motion.div>
      <motion.div
        className=""
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
        <div className="text-xl xl:text-2xl lg-text-2xl md:text-xl sm:text-xl text-justify -mt-12 md:mt-0 lg:mt-0 xl:mt-0">
        <h4 >
        Full Stack web developer from India with experience in different technologies including React, NodeJS, Golang, Docker, Postgres, MongoDB etc. I have also worked on blockchain projects and have won numerous hackathons.
        </h4>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
