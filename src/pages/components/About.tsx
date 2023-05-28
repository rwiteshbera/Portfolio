import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../assets/htm3.jpg";


type Props = {};

// 4 : 3
// 80 - 60
function About({}: Props) {
  return (
    <div className="w-screen pt-10">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center pb-5">
        About
      </h3>
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:mx-10 gap-x-5">
        <div>
          <Image
            src={image1}
            alt="hack the mountain picture"
            className="md:w-[30vw] md:px-0 px-12 py-6"
            priority
          />
        </div>
        <div className="flex md:w-[40vw] px-8">
          <h4 className="2xl:text-lg text-base m-auto text-justify">
            I am an undergraduate student pursuing Computer Science &
            Engineering from India with proficiency in frontend and backend
            development. I have a strong passion for learning and keeping up
            with industry trends. I have hands-on experience with blockchain
            projects and achieved success in hackathons. Currently, my primary
            focus is on enhancing my proficiency in DevOps practices. I eagerly
            look forward to the exciting possibilities that the future holds for
            me.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
