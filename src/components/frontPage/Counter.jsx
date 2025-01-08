"use client";
import React from "react";
import AnimatedCounter from "../AnimatedCounter";
import { motion } from "framer-motion";

const Counter = () => {
  const counter1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };
  const counter2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.7, duration: 1 },
    },
  };
  const counter3 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
  };
  const counter4 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
  };
  return (
    <main className="countsDiv">
      <motion.div
        variants={counter1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>FIDÈLE À PLUS DE</p>
        <AnimatedCounter from={0} to={1100} duration={5} />
        <p>MEMBRES</p>
      </motion.div>
      <motion.div
        variants={counter2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>JOUEZ À PLUS DE </p>
        <AnimatedCounter from={0} to={5} duration={3} />
        <p>LOCAUX</p>
      </motion.div>
      <motion.div
        variants={counter3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>À VOTRE SERVICE DEPUIS</p>
        <AnimatedCounter from={0} to={9} duration={4} />
        <p>ANS</p>
      </motion.div>
      <motion.div
        variants={counter4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>AIR PLANES</p>
        <AnimatedCounter from={0} to={25} duration={4} />
        <p>ANS</p>
      </motion.div>
    </main>
  );
};

export default Counter;
