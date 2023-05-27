import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import image1 from "../assets/htm3.jpg";
import { useRouter } from "next/router";

type Props = {};

// 4 : 3
// 80 - 60
function About({}: Props) {
  return (
    <div className="h-screen w-screen pt-10">
      <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center pb-5">
        About
      </h3>
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:mx-10 gap-x-5">
          <motion.div className="">
          <Image
            src={image1}
            alt="hack the mountain picture"
            className="md:w-[30vw] md:px-0 px-12"
            // height={3072}
            // width={2304}
            quality={100}
            loading="lazy"
          />
          </motion.div>
          <motion.div className="flex md:w-[40vw] p-8">
            <h4 className="2xl:text-lg text-base m-auto text-justify">I am an undergraduate student pursuing Computer Science & Engineering from India with proficiency in frontend and backend development. I have a strong passion for learning and keeping up with industry trends. I have hands-on experience with blockchain projects and achieved success in hackathons. Currently, my primary focus is on enhancing my proficiency in DevOps practices. I eagerly look forward to the exciting possibilities that the future holds for me.</h4>
          </motion.div>
      </div>
    </div>
    // <div className="h-screen w-screen py-32">
    //   <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-semibold text-center">
    //     About
    //   </h3>
    //   <div className="flex flex-row justify-center mt-6 flex-wrap">
    //     <motion.div
    //     initial={{
    //       x: -500,
    //       opacity: 0,
    //     }}
    //     animate={{
    //       x: 0,
    //       opacity: 1,
    //     }}
    //     whileInView={{ x: 0 }}
    //     viewport={{ once: true }}
    //     transition={{
    //       duration: 1.2,
    //     }}
    //     >
    //       <Image src={image1} alt="image" className="h-80 md:h-72 sm:h-72 xsm:h-72  w-auto" />
    //     </motion.div>
    //     <motion.div className="w-max sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3 2xl:w-1/2 px-10  pt-5 my-auto"
    //     initial={{
    //       x: 500,
    //       opacity: 0,
    //     }}
    //     animate={{
    //       x: 0,
    //       opacity: 1,
    //     }}
    //     transition={{
    //       duration: 1.2,
    //     }}
    //     >
    //       <h4 className="about text-base 2xl:text-xl xl:text-2xl lg:text-xl md:text-base sm:text-base">
    //       I am an undergraduate student pursuing Computer Science & Engineering in India with proficiency in frontend and backend development. With a strong commitment to continuous learning, I consistently update my knowledge to stay up-to-date with the latest industry trends. I have hands-on experience with blockchain projects and successful hackathon participation. Currently, my primary focus is on enhancing my proficiency in DevOps practices. I eagerly look forward to the exciting possibilities that the future holds for me.
    //       </h4>
    //     </motion.div>
    //   </div>
    // </div>
  );
}

export default About;
