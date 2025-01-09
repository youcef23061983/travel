"use client";
import React from "react";
import AnimatedCounter from "../AnimatedCounter";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Counter = () => {
  const t = useTranslations("HomePage");

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
        <p>{t("infoAirelines")}</p>
        <AnimatedCounter from={0} to={22} duration={5} />
        <p>{t("company")}</p>
      </motion.div>
      <motion.div
        variants={counter2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>{t("infoHotels")}</p>
        <AnimatedCounter from={0} to={73} duration={3} />
        <p>{t("hotel")}</p>
      </motion.div>
      <motion.div
        variants={counter3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>{t("infoPackages")}</p>
        <AnimatedCounter from={0} to={30} duration={4} />
        <p>{t("package")}</p>
      </motion.div>
      <motion.div
        variants={counter4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>{t("infoTravels")}</p>
        <AnimatedCounter from={0} to={14} duration={4} />

        <p>{t("traveler")}</p>
      </motion.div>
    </main>
  );
};

export default Counter;
