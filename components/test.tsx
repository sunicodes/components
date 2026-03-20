"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Test = () => {
  return (
    <div>
    <div className="h-screen flex justify-center items-center">
      {/* <Image
        src="/fateofophileia.png"
        width={50}
        height={50}
        alt="hello world"
      ></Image> */}

      <motion.img
        src={"/fateofophileia.png"}
        alt="hello"
        width="300"
        height="200"
        initial={{ y: 50, opacity: 0 }} // start: 50px down, invisible
        animate={{ y: 0, opacity: 1 }} // end: normal position, visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      />


      
    </div>

    <div className="h-screen flex justify-center items-center">
            <motion.img
        src={"/bemybaby.jpg"}
        alt="hello"
        width="300"
        height="200"
        initial={{ y: 50, opacity: 0 }} // start: 50px down, invisible
        animate={{ y: 0, opacity: 1 }} // end: normal position, visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
    </div>
  );
};

export default Test;
