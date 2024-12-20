"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" md: hidden lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi {`I'm`} Eunice
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              className=" sm:text-5xl md:text-7xl"
              sequence={["Eunice,", 1000, "a Web Developer.", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:hidden md:flex text-base sm:text-lg mb-6 lg:text-xl">
            {`I'm `}a Front End Developer and I specialize in <br /> developing
            modern web applications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="  w-[350px] h-[350px]  lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/ai-new.png"
              alt="hero image"
              className=" absolute pl-4 transform -translate-x-1/2 
               -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
